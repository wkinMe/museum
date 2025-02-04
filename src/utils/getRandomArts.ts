import { BASE_URL } from '../constants/constants';
import { IArtItem } from '../types/IArtItem';
import { IArtItemResponse } from '../types/IArtItemResponse';
import { getArtById } from './getArtById';

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
