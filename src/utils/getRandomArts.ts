import { BASE_URL } from '../constants/constants';
import { ArtItem } from '../constants/interfaces';

export const getRandomArts = async (count: number) => {
    const artsArr: ArtItem[] = [];
    const ids: number[] = [];

    // ids initialize
    const data = await fetch(
        `${BASE_URL}?page=${Math.floor(Math.random() * 10)}&limit=${count}&fields=id`,
    )
        .then((res) => res.json())
        .then((res) => res.data);
    data.map((i: { id: number }) => ids.push(i.id));

    for (const id of ids) {
        try {
            const response = await fetch(
                `${BASE_URL}/${id}?fields=id,title,artist_title,is_public_domain`,
            );
            const data = await response.json().then((res) => res.data);
            artsArr.push(data);
        } catch (e: unknown) {
            console.error(e);
        }
    }

    return artsArr;
};
