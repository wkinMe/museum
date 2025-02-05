import { serachByParams } from './searchByParams';

export const getArtsCount = async (search: string) => {
    const data = await serachByParams(search)
        .then((res) => res.json())
        .then((res) => res.data);

    return data.length;
};
