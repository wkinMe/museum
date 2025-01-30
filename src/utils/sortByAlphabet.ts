import { ArtItem } from '../constants/interfaces';

export const sortByAlphabet = (arts: ArtItem[]) => {
    return arts.toSorted((a: ArtItem, b: ArtItem) =>
        a.title.localeCompare(b.title),
    );
};
