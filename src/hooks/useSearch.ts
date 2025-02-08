import { ARTS_IN_GALLERY } from '@src/constants/constants';
import { useGetArtsFromQuery } from '@src/hooks/useGetArtsFromQuery';
import { IArtItem } from '@src/types/IArtItem';

import { getArtsCount } from '@api/getImagesCount';
import { getRandomArts } from '@api/getRandomArts';
import { serachByParams } from '@api/searchByParams';

import { useState, useCallback } from 'react';

export const useSearch = (imgCount: number, page: number) => {
    const getArtsFromQuery = useGetArtsFromQuery();
    const [searchPromise, setSearchPromise] = useState<Promise<IArtItem[]>>(
        useCallback(
            async () => await getArtsFromQuery(getRandomArts(imgCount)),
            [imgCount],
        ),
    );
    const [artsCount, setArtsCount] = useState(0);

    const handleSearch = useCallback(
        async (search: string) => {
            const count = await getArtsCount(search);
            setArtsCount(count);
            setSearchPromise(
                getArtsFromQuery(serachByParams(search, page, imgCount)),
            );
        },
        [imgCount, page, getArtsFromQuery],
    );

    const updateSearchPromise = useCallback(
        (search: string, page: number) => {
            setSearchPromise(
                getArtsFromQuery(serachByParams(search, page, imgCount)),
            );
        },
        [imgCount, getArtsFromQuery],
    );

    return { searchPromise, artsCount, handleSearch, updateSearchPromise };
};
