import { getArtsFromQuery } from '@src/__tests__/utils/getArtsFromQuery';

import { describe, expect, test } from 'vitest';

import { getArtById } from '../api/getArtById';
import { getRandomArts } from '../api/getRandomArts';
import { serachByParams } from '../api/searchByParams';

describe('Get arts test', () => {
    const limit = 5;
    const page = 2;

    test('Get random count test', async () => {
        const arts = await getArtsFromQuery(getRandomArts(limit, page));
        expect(arts.length).toBe(5);
    });

    test('Get search count test', async () => {
        const searchedArts = await getArtsFromQuery(
            serachByParams('test', page, limit),
        );
        expect(searchedArts.length).toBe(5);
    });

    test('Get by id test', async () => {
        const id = 123123;
        const art = await getArtById(id);
        expect(art.id).toBe(id);
    });
});
