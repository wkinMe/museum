import { BASE_URL } from '../constants/constants';
import { ArtItem, ArtItemResponse } from '../constants/interfaces';
import { getArtById } from './getArtById';

export const getRandomArts = async (
    count: number,
    page = 1,
): Promise<ArtItem[]> => {
    const response = await fetch(
        `${BASE_URL}?page=${page}&limit=${count}&fields=id`,
    );
    const res = await response.json();

    const promises = res.data.map((i: ArtItemResponse) => getArtById(i.id));

    const arts = await Promise.all(promises);
    return arts;
};
