import { IArtItem } from '@src/types/IArtItem';
import { useGetArtsFromQuery } from '@src/utils/useGetArtsFromQuery';

import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import ErrorText from '@components/ErrorText';
import Gallery from '@components/Gallery';
import Loader from '@components/Loader';
import PaginationButtons from '@components/PaginationButtons';
import SearchForm from '@components/SearchForm';
import Subtitle from '@components/Subtitle';

import { ARTS_IN_GALLERY, GALLERY_SIZES } from '@constants/constants';

import { useResize } from '@hooks/useResize';

import { getArtsCount } from '@api/getImagesCount';
import { getRandomArts } from '@api/getRandomArts';
import { serachByParams } from '@api/searchByParams';

import { Suspense, useRef, useState, useEffect, useCallback } from 'react';

import style from './style.module.scss';

export default function GalleryContainer() {
    const getArtsFromQuery = useGetArtsFromQuery();
    const width = useResize();

    const searchString = useRef('');
    const [page, setPage] = useState(1);
    const [imgCount, setImgCount] = useState(() => {
        if (width > 815) {
            return GALLERY_SIZES.LARGE;
        } else if (width < 815 && width > 550) {
            return GALLERY_SIZES.MEDIUM;
        }
        return GALLERY_SIZES.SMALL;
    });

    const [pageCount, setPageCount] = useState(0);

    const initialPromise = useCallback(
        async () => await getArtsFromQuery(getRandomArts(imgCount)),
        [imgCount],
    );

    const [searchPromise, setSearchPromise] =
        useState<Promise<IArtItem[]>>(initialPromise);

    useEffect(() => {
        if (width > 815 && imgCount !== GALLERY_SIZES.LARGE) {
            setImgCount(GALLERY_SIZES.LARGE);
        } else if (
            width < 815 &&
            width > 550 &&
            imgCount !== GALLERY_SIZES.MEDIUM
        ) {
            setImgCount(GALLERY_SIZES.MEDIUM);
        } else if (width < 550 && imgCount !== GALLERY_SIZES.SMALL) {
            setImgCount(GALLERY_SIZES.SMALL);
        }
    }, [width]);

    useEffect(() => {
        if (imgCount > 0 && pageCount !== 0) {
            setPageCount(Math.ceil(ARTS_IN_GALLERY / imgCount));
        } else if (imgCount == 0) {
            setPageCount(0);
        }
    }, [imgCount]);

    const handleSearch = async (search: string) => {
        searchString.current = search;
        setSearchPromise(
            getArtsFromQuery(serachByParams(search, page, imgCount)),
        );
        const artsCount = await getArtsCount(search);
        const pages = Math.ceil(artsCount / imgCount);

        if (pageCount !== pages) {
            setPageCount(pages);
        }
    };

    const handlePaginate = (page: number) => {
        if (searchString.current.length !== 0) {
            setSearchPromise(
                getArtsFromQuery(
                    serachByParams(searchString.current, page, imgCount),
                ),
            );
            setPage(page);
        }
    };

    return (
        <div className={style.galleryContainer}>
            <SearchForm onClick={handleSearch} />
            <Subtitle subtitle='Topics for you' title='Our special gallery' />
            {imgCount ? (
                <ErrorBoundary
                    fallback={<ErrorText text='Gallery render error' />}
                >
                    <Suspense fallback={<Loader size='large' />}>
                        <Gallery cardPromise={searchPromise} />
                    </Suspense>
                </ErrorBoundary>
            ) : (
                <span className={style.noImages}>
                    There is no images by your request
                </span>
            )}

            <PaginationButtons pageCount={pageCount} onClick={handlePaginate} />
        </div>
    );
}
