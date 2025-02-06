import { IArtItem } from '@src/types/IArtItem';

export const sortByEndDate = (arts: IArtItem[]): IArtItem[] => {
    return arts.toSorted((a: IArtItem, b: IArtItem) => a.date_end - b.date_end);
};
