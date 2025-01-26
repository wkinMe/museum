import { BASE_URL } from '../constants/constants';

export interface ArtItem {
    id: number;
    title: string;
    date_start: number;
    date_end: number;
    artist_title: string;
    is_public_domain: boolean;
    credit_line: string;
    artist_nationality: string;
}

interface ArtItemResponse {
    id: number;
    title: string;
    date_start: number;
    date_end: number;
    artist_title: string;
    is_public_domain: boolean;
    credit_line: string;
    artist_display: string;
}

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
                `${BASE_URL}/${id}?&fields=id,title,date_start,date_end,artist_title,artist_display,is_public_domain,credit_line`,
            );
            const data = await response.json().then((res) => res.data);
            artsArr.push(makeData(data));
        } catch (e: unknown) {
            console.error(e);
        }
    }

    return artsArr;
};

const makeData = (data: ArtItemResponse): ArtItem => {
    const match = data.artist_display.match(/(?<=\n|\\\()\s*([^,\n]+)/);
    const nationality = match ? match[1].trim() : 'Unknown';
    return { ...data, artist_nationality: nationality };
};
