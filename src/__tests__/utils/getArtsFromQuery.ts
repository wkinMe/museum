import { IArtItemResponse } from '@src/types/IArtItemResponse';

import { getArtById } from '@api/getArtById';

export const getArtsFromQuery = async (response: Promise<Response>) => {
    const res = await response.then((res) => res.json());

    const promises = res.data.map(({ id }: IArtItemResponse) => getArtById(id));
    const arts = await Promise.all(promises);

    return arts;
};
