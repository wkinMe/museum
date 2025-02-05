import { BASE_URL, FIELDS } from '../constants/constants';
import { correctArtData } from '../utils/correctArtData';

export function getArtById(id: number) {
    return fetch(`${BASE_URL}/${id}?${FIELDS}`)
        .then((response) => response.json())
        .then((res) => correctArtData(res.data));
}
