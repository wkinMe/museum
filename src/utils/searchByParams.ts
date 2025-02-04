import { BASE_URL } from '../constants/constants';
import { IArtItemResponse } from '../types/IArtItemResponse';
import { getArtById } from './getArtById';

export const serachByParams = async (
    searchString: string,
    page = 1,
    limit = 10,
) => {
    const response = await fetch(
        `${BASE_URL}/search?q=${searchString}&fields=id&page=${page}&limit=${limit}`,
    );

    const res = await response.json();

    const promises = res.data.map((i: IArtItemResponse) => getArtById(i.id));

    const arts = await Promise.all(promises);

    return arts;
};
