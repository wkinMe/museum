import { BASE_URL } from '../constants/constants';
import { IArtItem } from '../types/IArtItem';
import { IArtItemResponse } from '../types/IArtItemResponse';
import { getArtById } from './getArtById';

export const getRandomArts = async (
    count: number,
    page = 1,
): Promise<Response> => {
    const response = await fetch(
        `${BASE_URL}?page=${page}&limit=${count}&fields=id`,
    );

    return response;
};
