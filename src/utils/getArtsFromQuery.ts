import { IArtItemResponse } from '../types/IArtItemResponse';
import { getArtById } from '../api/getArtById';

export const getArtsFromQuery = async (response: Promise<Response>) => {
    const res = await response.then((res) => res.json());

    const promises = res.data.map((i: IArtItemResponse) => getArtById(i.id));
    const arts = await Promise.all(promises);

    return arts;
};
