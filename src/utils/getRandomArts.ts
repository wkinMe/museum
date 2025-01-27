import { BASE_URL } from '../constants/constants';
import { ArtItem } from '../constants/interfaces';
import { getArtById } from './getArtById';

export const getRandomArts = async (count: number) => {
    const artsArr: ArtItem[] = [];
    const ids: number[] = [];

    // ids initialize
    const data = await fetch(
        `${BASE_URL}?page=${Math.floor(Math.random() * 100 + 1)}&limit=${count}&fields=id`,
    )
        .then((res) => res.json())
        .then((res) => res.data);
    data.map((i: { id: number }) => ids.push(i.id));

    for (let i = 0; i < count; i++) {
        try {
            const artItem = await getArtById(ids[i]);
            artsArr.push(artItem);
        } catch (e: unknown) {
            console.error(e);
        }
    }

    return artsArr;
};
