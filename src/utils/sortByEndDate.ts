import { ArtItem } from '../constants/interfaces';

export const sortByEndDate = (arts: ArtItem[]) => {
    return arts.toSorted((a: ArtItem, b: ArtItem) => a.date_end - b.date_end);
};
