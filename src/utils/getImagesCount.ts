import { serachByParams } from './searchByParams';

export const getArtsCount = async (search: string) => {
    const data = await serachByParams(search);

    return data.length;
};
