import { BASE_URL } from '../constants/constants';
import { ArtItem, ArtItemResponse } from '../constants/interfaces';
import { getArtById } from './getArtById';

export const getRandomArts = async (count: number): Promise<ArtItem[]> => {
    const response = await fetch(
        `${BASE_URL}?page=${Math.floor(Math.random() * 100 + 1)}&limit=${count}&fields=id`,
    );
    const res = await response.json();

    const promises = res.data.map((i: ArtItemResponse) => getArtById(i.id));

    const arts = await Promise.all(promises);
    return arts;
};
