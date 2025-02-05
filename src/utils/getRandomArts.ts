import { BASE_URL } from '../constants/constants';

export const getRandomArts = async (count: number, page = 1) => {
    const response = await fetch(
        `${BASE_URL}?page=${page}&limit=${count}&fields=id`,
    );

    return response;
};
