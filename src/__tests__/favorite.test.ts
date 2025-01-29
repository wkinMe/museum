import { afterAll, afterEach, beforeAll, describe, expect, test } from 'vitest';
import { addFavorite } from '../utils/addFavorite';
import { getArtById } from '../utils/getArtById';
import { getRandomArts } from '../utils/getRandomArts';
import { removeFavorite } from '../utils/removeFavorite';
import { checkIsFavorite } from '../utils/checkIsFavorite';

describe('Favorite interaction test', () => {
    beforeAll(() => {
        sessionStorage.setItem('favorite', '[]');
    });

    test('Add favorite test', async () => {
        const artItem = await getArtById(123123);

        addFavorite(artItem);
        const favorite = JSON.parse(sessionStorage.getItem('favorite')!);
        expect(favorite.length).toBe(1);
    });

    test('Get and remove test', async () => {
        const limit = 3;
        const randomArts = await getRandomArts(limit);
        randomArts.map((i) => addFavorite(i));

        let favorite = JSON.parse(sessionStorage.getItem('favorite')!);
        expect(favorite.length).toBe(limit);

        randomArts.map((i) => removeFavorite(i));
        favorite = JSON.parse(sessionStorage.getItem('favorite')!);
        expect(favorite.length).toBe(0);
    });

    test('Check if favorite test', async () => {
        const limit = 3;
        const randomArts = await getRandomArts(limit);
        randomArts.map((i) => addFavorite(i));

        randomArts.map((i) => expect(checkIsFavorite(i)).toBe(true));
    });

    afterEach(() => {
        sessionStorage.setItem('favorite', '[]');
    });
    afterAll(() => {
        sessionStorage.removeItem('favorite');
    });
});
