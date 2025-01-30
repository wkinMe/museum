import { ArtItem } from '../constants/interfaces';

export const sortByStartDate = (arts: ArtItem[]) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    return arts.toSorted(
        (a: ArtItem, b: ArtItem) => a.date_start - b.date_start,
    );
};
