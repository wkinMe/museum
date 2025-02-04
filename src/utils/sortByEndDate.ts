import { IArtItem } from '../types/IArtItem';

export const sortByEndDate = (arts: IArtItem[]) => {
    return arts.toSorted((a: IArtItem, b: IArtItem) => a.date_end - b.date_end);
};
