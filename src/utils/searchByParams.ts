import { BASE_URL, FIELDS } from '../constants/constants';
import { ArtItemResponse } from '../constants/interfaces';
import { makeData } from './getArtById';

export const serachByParams = async (
    searchString: string,
    page = 1,
    limit = 3,
) => {
    const response = await fetch(
        `${BASE_URL}/search?q=${searchString}&fields=id,${FIELDS}&page=${page}&limit=${limit}`,
    );
    const data = await response.json().then((res) => res.data);
    console.log(data);

    const arts = data.map((i: ArtItemResponse) => makeData(i));
    return arts;
};
