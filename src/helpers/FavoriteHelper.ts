import { IFavoriteItem } from '@src/types/IFavoriteItem';

import { getArtById } from '@api/getArtById';

class FavoriteHelper {
    private static instance: FavoriteHelper;
    private readonly storageKey: string = 'favorite';

    private constructor() {
        sessionStorage.setItem(this.storageKey, '[]');
    }

    public static getInstance(): FavoriteHelper {
        if (!FavoriteHelper.instance) {
            FavoriteHelper.instance = new FavoriteHelper();
        }
        return FavoriteHelper.instance;
    }

    public getFavorites(): IFavoriteItem[] {
        const favorites = sessionStorage.getItem(this.storageKey);
        return favorites ? JSON.parse(favorites) : [];
    }

    public addToFavorites(item: IFavoriteItem): void {
        const favorites = this.getFavorites();
        const { id } = item;
        if (!favorites.find((fav) => fav.id == id)) {
            favorites.push(item);
            sessionStorage.setItem(this.storageKey, JSON.stringify(favorites));
        }
    }

    public removeFromFavorites(item: IFavoriteItem): void {
        const favorites = this.getFavorites();
        const { id } = item;
        const updatedFavorites = favorites.filter(
            (favorite) => favorite.id !== id,
        );
        sessionStorage.setItem(
            this.storageKey,
            JSON.stringify(updatedFavorites),
        );
    }

    public async getFavoriteArts() {
        const favorites = this.getFavorites();
        const arts = await Promise.all(
            favorites.map(({ id }) => getArtById(id)),
        );
        return arts;
    }

    public clearFavorites(): void {
        sessionStorage.removeItem(this.storageKey);
    }

    public isFavorite(item: IFavoriteItem): boolean {
        const favorites = this.getFavorites();
        const { id } = item;

        return !!favorites.find((fav) => fav.id == id);
    }
}

export const favoriteHelper = FavoriteHelper.getInstance();
