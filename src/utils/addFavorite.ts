import { ArtItem } from '../constants/interfaces';

export const addFavorite = (art: ArtItem) => {
    const prevFavorites = JSON.parse(sessionStorage.getItem('favorite')!);
    const newFavorites = JSON.stringify([...prevFavorites, art]);
    sessionStorage.setItem('favorite', newFavorites);
};
