import { ErrorContext } from '@src/components/Layout';

import { useContext } from 'react';

import { getArtById } from '../api/getArtById';
import { IArtItemResponse } from '../types/IArtItemResponse';

export const useGetArtsFromQuery = () => {
    const { setErrors } = useContext(ErrorContext);

    return async (response: Promise<Response>) => {
        const res = await response.then((res) => res.json());

        if (!res.data) {
            setErrors(`${res.status} code. \n${res.error}`);
        }

        const promises = res.data.map(({ id }: IArtItemResponse) =>
            getArtById(id),
        );
        const arts = await Promise.all(promises);

        return arts;
    };
};
