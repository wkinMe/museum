import { IArtItem } from '@src/types/IArtItem';

export const sortByEndDate = (arts: IArtItem[]): IArtItem[] => {
    const sortedArts = [...arts];
    sortedArts.sort((a: IArtItem, b: IArtItem) => a.date_end - b.date_end);
    return sortedArts;
};
