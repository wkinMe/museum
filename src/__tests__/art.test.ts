import { describe, expect, test } from 'vitest';
import { getRandomArts } from '../api/getRandomArts';
import { serachByParams } from '../api/searchByParams';
import { getArtById } from '../api/getArtById';

describe('Get arts test', () => {
    const limit = 5;
    const page = 2;

    test('Get random count test', async () => {
        const arts = await getRandomArts(limit, page);
        expect(arts.length).toBe(5);
    });

    test('Get search count test', async () => {
        const searchedArts = await serachByParams('test', page, limit);
        expect(searchedArts.length).toBe(5);
    });

    test('Get by id test', async () => {
        const id = 123123;
        const art = await getArtById(id);
        expect(art.id).toBe(id);
    });
});
