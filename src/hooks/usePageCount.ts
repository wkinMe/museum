import { useState } from 'react';

export const usePageCount = (imgCount: number, artsCount: number) => {
    const [pageCount, setPageCount] = useState(0);

    if (pageCount !== Math.ceil(artsCount / imgCount)) {
        if (imgCount > 0 && artsCount > 0) {
            setPageCount(Math.ceil(artsCount / imgCount));
        } else {
            setPageCount(0);
        }
    }

    return { pageCount };
};
