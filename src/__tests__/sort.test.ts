import { describe, expect, test } from 'vitest';
import { getRandomArts } from '../utils/getRandomArts';
import { sortByAlphabet } from '../utils/sortByAlphabet';
import { ArtItem } from '../constants/interfaces';
import { sortByEndDate } from '../utils/sortByEndDate';
import { sortByStartDate } from '../utils/sortByStartDates';

describe('Sort tests', () => {
    test('Sort by alphabet', async () => {
        const randomArts = await getRandomArts(5, 12);
        const sortedArts = sortByAlphabet(randomArts);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        const sortArts = randomArts.toSorted((a: ArtItem, b: ArtItem) =>
            a.title.localeCompare(b.title),
        );

        expect(sortArts).toEqual(sortedArts);
    });

    test('Sort by date start', async () => {
        const randomArts = await getRandomArts(5, 12);
        const sortedArts = sortByStartDate(randomArts);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        const sortArts = randomArts.toSorted(
            (a: ArtItem, b: ArtItem) => a.date_start - b.date_start,
        );

        expect(sortArts).toEqual(sortedArts);
    });

    test('Sort by date end', async () => {
        const randomArts = await getRandomArts(5, 12);
        const sortedArts = sortByEndDate(randomArts);

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        const sortArts = randomArts.toSorted(
            (a: ArtItem, b: ArtItem) => a.date_end - b.date_end,
        );

        expect(sortArts).toEqual(sortedArts);
    });
});
