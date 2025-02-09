import { useEffect, useState, useMemo } from 'react';

interface UsePaginationProps {
    onPageChange: (page: number) => void;
    pageCount: number;
}

export function usePaginationButtons({
    onPageChange,
    pageCount,
}: UsePaginationProps) {
    const [page, setPage] = useState(1);

    useEffect(() => {
        onPageChange(page);
    }, [page]);

    const pages = useMemo(() => new Array(pageCount).fill(null), [pageCount]);

    const handlePageClick = (newPage: number) => {
        if (newPage !== page) setPage(newPage);
    };
    
    const handleSideBtn = (count: number) => {
        setPage((prev) => Math.min(Math.max(prev + count, 1), pageCount));
    };

    return { page, pages, handlePageClick, handleSideBtn };
}
