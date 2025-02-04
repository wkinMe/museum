import { IArtItem } from '../types/IArtItem';

export const addFavorite = (art: IArtItem) => {
    const prevFavorites = JSON.parse(sessionStorage.getItem('favorite')!);
    const newFavorites = JSON.stringify([...prevFavorites, art]);
    sessionStorage.setItem('favorite', newFavorites);
};
