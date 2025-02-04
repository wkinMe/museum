import { IArtItem } from '../types/IArtItem';

export const checkIsFavorite = (art: IArtItem) => {
    const favorites = JSON.parse(sessionStorage.getItem('favorite')!);
    return favorites.find((i: IArtItem) => i.id === art.id) && true;
};
