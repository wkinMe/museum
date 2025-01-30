import { ArtItem } from '../constants/interfaces';

export const sortByStartDate = (arts: ArtItem[]) => {
    return arts.toSorted(
        (a: ArtItem, b: ArtItem) => a.date_start - b.date_start,
    );
};
