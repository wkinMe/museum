import { BASE_URL, FIELDS } from '../constants/constants';
import { ArtItemResponse } from '../constants/interfaces';
import { makeData } from './getArtById';

export const serachByParams = async (searchString: string) => {
    const response = await fetch(
        `${BASE_URL}/search?q=${searchString}&fields=id,${FIELDS}`,
    );
    const data = await response.json().then((res) => res.data);
    console.log(data);

    data.forEach((i: ArtItemResponse) => makeData(i));

    return data;
};
