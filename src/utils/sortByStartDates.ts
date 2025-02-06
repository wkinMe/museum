import { IArtItem } from '@src/types/IArtItem';

export const sortByStartDate = (arts: IArtItem[]): IArtItem[] => {
    return arts.toSorted(
        (a: IArtItem, b: IArtItem) => a.date_start - b.date_start,
    );
};
