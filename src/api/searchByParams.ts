import { BASE_URL } from '../constants/constants';

export const serachByParams = async (
    searchString: string,
    page = 1,
    limit = 10,
) => {
    const response = await fetch(
        `${BASE_URL}/search?q=${searchString}&fields=id&page=${page}&limit=${limit}`,
    );

    return response;
};
