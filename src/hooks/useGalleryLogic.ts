import { useState } from 'react';

import { usePageCount } from './usePageCount';
import { useSearch } from './useSearch';

export const useGalleryLogic = (imgCount: number) => {
    const [page, setPage] = useState(1);
    const [searchString, setSearchString] = useState('');
    
    const { searchPromise, artsCount, handleSearch, updateSearchPromise } =
        useSearch(imgCount, page);
    const { pageCount } = usePageCount(imgCount, artsCount);

    const handlePaginate = (newPage: number) => {
        setPage(newPage);
        if (searchString) {
            updateSearchPromise(searchString, newPage);
        }
    };

    const onSearch = async (search: string) => {
        setSearchString(search);
        setPage(1);
        await handleSearch(search);
    };

    return { page, pageCount, searchPromise, onSearch, handlePaginate };
};
