import { getArtsFromQuery } from '@src/__tests__/utils/getArtsFromQuery';
import { IArtItem } from '@src/types/IArtItem';

import { describe, expect, test } from 'vitest';

import { getRandomArts } from '../api/getRandomArts';
import { sortByAlphabet } from '../utils/sortByAlphabet';
import { sortByEndDate } from '../utils/sortByEndDate';
import { sortByStartDate } from '../utils/sortByStartDates';

describe('Sort tests', () => {
    test('Sort by alphabet', async () => {
        const randomArts = await getArtsFromQuery(getRandomArts(5, 12));
        const sortedArts = sortByAlphabet(randomArts);
        const sortArts = [...randomArts];
        sortArts.sort((a: IArtItem, b: IArtItem) =>
            a.title.localeCompare(b.title),
        );

        expect(sortArts).toEqual(sortedArts);
    });

    test('Sort by date start', async () => {
        const randomArts = await getArtsFromQuery(getRandomArts(5, 12));
        const sortedArts = sortByStartDate(randomArts);
        const sortArts = [...randomArts];
        sortArts.sort(
            (a: IArtItem, b: IArtItem) => a.date_start - b.date_start,
        );

        expect(sortArts).toEqual(sortedArts);
    });

    test('Sort by date end', async () => {
        const randomArts = await getArtsFromQuery(getRandomArts(5, 12));
        const sortedArts = sortByEndDate(randomArts);
        const sortArts = [...randomArts];
        sortArts.sort((a: IArtItem, b: IArtItem) => a.date_end - b.date_end);

        expect(sortArts).toEqual(sortedArts);
    });
});
