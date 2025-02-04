import { IArtItem } from '../types/IArtItem';

export const sortByAlphabet = (arts: IArtItem[]) => {
    return arts.toSorted((a: IArtItem, b: IArtItem) =>
        a.title.localeCompare(b.title),
    );
};
