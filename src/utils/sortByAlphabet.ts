import { ArtItem } from '../constants/interfaces';

export const sortByAlphabet = (arts: ArtItem[]) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    return arts.toSorted((a: ArtItem, b: ArtItem) =>
        a.title.localeCompare(b.title),
    );
};
