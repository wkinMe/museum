import { ArtItem } from '../constants/interfaces';

export const checkIsFavorite = (art: ArtItem) => {
    const favorites = JSON.parse(sessionStorage.getItem('favorite')!);
    return favorites.find((i: ArtItem) => i.id === art.id) + 1;
};
