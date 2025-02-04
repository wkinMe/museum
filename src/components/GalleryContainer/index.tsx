import { Suspense, useRef, useState, useEffect } from 'react';
import Gallery from '../../components/Gallery';
import Loader from '../../components/Loader';
import { getRandomArts } from '../../utils/getRandomArts';
import { serachByParams } from '../../utils/searchByParams';
import SearchForm from '../../components/SearchForm';
import PaginationButtons from '../../components/PaginationButtons';
import { IArtItem } from '../../types/IArtItem';

import style from './style.module.scss';
import Subtitle from '../Subtitle';
import { useResize } from '../../hooks/useResize';
import { ARTS_IN_GALLERY, GALLERY_SIZES } from '../../constants/constants';
import { getArtsCount } from '../../utils/getImagesCount';

const GalleryContainer = () => {
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

    const [searchPromise, setSearchPromise] = useState<Promise<IArtItem[]>>(
        Promise.resolve([]),
    );

    useEffect(() => {
        setSearchPromise(getRandomArts(imgCount));
    }, []);

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

    // Обновляем количество страниц при изменении общего количества элементов
    useEffect(() => {
        if (imgCount > 0 && pageCount !== 0) {
            setPageCount(Math.ceil(ARTS_IN_GALLERY / imgCount));
        } else if (imgCount == 0) {
            setPageCount(0);
        }
    }, [imgCount]);

    return (
        <div className={style.galleryContainer}>
            <SearchForm
                onClick={async (search: string) => {
                    searchString.current = search;
                    setSearchPromise(serachByParams(search, page, imgCount));
                    const artsCount = await getArtsCount(search);
                    const artsPerPage = Math.ceil(artsCount / imgCount);
                    if (pageCount !== artsPerPage) {
                        setPageCount(artsPerPage);
                    }
                }}
            />
            <Subtitle subtitle='Topics for you' title='Our special gallery' />
            {imgCount ? (
                <Suspense
                    fallback={
                        <Loader
                            size='large'
                            style={{ height: '300px', width: '300px' }}
                        />
                    }
                >
                    <Gallery cardPromise={searchPromise} />
                </Suspense>
            ) : (
                <span className={style.noImages}>
                    There is no images by your request
                </span>
            )}

            <PaginationButtons
                pageCount={pageCount}
                onClick={(page: number) => {
                    if (searchString.current.length !== 0) {
                        setSearchPromise(
                            serachByParams(
                                searchString.current,
                                page,
                                imgCount,
                            ),
                        );
                        setPage(page);
                    }
                }}
            />
        </div>
    );
};

export default GalleryContainer;
