import { getArtsFromQuery } from '@src/__tests__/utils/getArtsFromQuery';
import { favoriteHelper } from '@src/helpers/FavoriteHelper';

import { afterAll, afterEach, beforeAll, describe, expect, test } from 'vitest';

import { getArtById } from '../api/getArtById';
import { getRandomArts } from '../api/getRandomArts';

describe('Favorite interaction test', () => {
    beforeAll(() => {
        sessionStorage.setItem('favorite', '[]');
    });

    test('Add favorite test', async () => {
        const artItem = await getArtById(123123);

        favoriteHelper.addToFavorites(artItem);
        const favorite = JSON.parse(sessionStorage.getItem('favorite')!);
        expect(favorite.length).toBe(1);
    });

    test('Get and remove test', async () => {
        const limit = 3;
        const randomArts = await getArtsFromQuery(getRandomArts(limit));
        randomArts.map((i) => favoriteHelper.addToFavorites(i));

        let favorite = JSON.parse(sessionStorage.getItem('favorite')!);
        expect(favorite.length).toBe(limit);

        randomArts.map((i) => favoriteHelper.removeFromFavorites(i));
        favorite = JSON.parse(sessionStorage.getItem('favorite')!);
        expect(favorite.length).toBe(0);
    });

    test('Check if favorite test', async () => {
        const limit = 3;
        const randomArts = await getArtsFromQuery(getRandomArts(limit));
        randomArts.map((i) => favoriteHelper.addToFavorites(i));

        randomArts.map((i) => expect(favoriteHelper.isFavorite(i)).toBe(true));
    });

    afterEach(() => {
        sessionStorage.setItem('favorite', '[]');
    });
    afterAll(() => {
        sessionStorage.removeItem('favorite');
    });
});
