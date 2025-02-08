import { useState, useEffect } from 'react';

export const usePagination = (imgCount: number, artsCount: number) => {
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        if (imgCount > 0 && artsCount > 0) {
            setPageCount(Math.ceil(artsCount / imgCount));
        } else {
            setPageCount(0);
        }
    }, [imgCount, artsCount]);

    return { pageCount };
};
