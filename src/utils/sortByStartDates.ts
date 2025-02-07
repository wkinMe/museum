import { IArtItem } from '@src/types/IArtItem';

export const sortByStartDate = (arts: IArtItem[]): IArtItem[] => {
    const sortedArts = [...arts];
    sortedArts.sort((a: IArtItem, b: IArtItem) => a.date_start - b.date_start);
    return sortedArts;
};
