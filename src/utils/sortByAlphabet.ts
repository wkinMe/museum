import { IArtItem } from '@src/types/IArtItem';

export const sortByAlphabet = (arts: IArtItem[]): IArtItem[] => {
    const sortedArts = [...arts];
    sortedArts.sort((a: IArtItem, b: IArtItem) =>
        a.title.localeCompare(b.title),
    );
    return sortedArts;
};
