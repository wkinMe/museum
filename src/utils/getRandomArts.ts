import { IArtItem } from '@src/types/IArtItem';
import { IArtItemResponse } from '@src/types/IArtItemResponse';

import { getArtById } from '@api/getArtById';

import { BASE_URL } from '../constants/constants';

export const getRandomArts = async (
    count: number,
    page = 1,
): Promise<IArtItem[]> => {
    const response = await fetch(
        `${BASE_URL}?page=${page}&limit=${count}&fields=id`,
    );
    const res = await response.json();

    const promises = res.data.map((i: IArtItemResponse) => getArtById(i.id));

    const arts = await Promise.all(promises);
    return arts;
};
