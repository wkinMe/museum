import { ArtItem } from '../constants/interfaces';

export const removeFavorite = (art: ArtItem) => {
    const prevFavorites: ArtItem[] = JSON.parse(
        sessionStorage.getItem('favorite')!,
    );
    const newFavorites = JSON.stringify(
        prevFavorites.filter((i) => i.id !== art.id),
    );
    sessionStorage.setItem('favorite', newFavorites);
};
