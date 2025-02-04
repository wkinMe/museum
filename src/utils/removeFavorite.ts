import { IArtItem } from '../types/IArtItem';

export const removeFavorite = (art: IArtItem) => {
    const prevFavorites: IArtItem[] = JSON.parse(
        sessionStorage.getItem('favorite')!,
    );
    const newFavorites = JSON.stringify(
        prevFavorites.filter((i) => i.id !== art.id),
    );
    sessionStorage.setItem('favorite', newFavorites);
};
