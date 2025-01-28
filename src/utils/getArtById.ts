import { BASE_URL, FIELDS } from '../constants/constants';
import { correctArtData } from './correctArtData';

export async function getArtById(id: number) {
    const response = await fetch(`${BASE_URL}/${id}?${FIELDS}`);

    const data = await response.json().then((res) => res.data);
    const art = correctArtData(data);

    return art;
}
