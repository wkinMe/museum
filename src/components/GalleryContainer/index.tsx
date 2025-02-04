import { Suspense, useRef, useState, useEffect, createContext } from 'react';
import Gallery from '../../components/Gallery';
import Loader from '../../components/Loader';
import { getRandomArts } from '../../utils/getRandomArts';
import { serachByParams } from '../../utils/searchByParams';
import SearchForm from '../../components/SearchForm';
import PaginationButtons from '../../components/PaginationButtons';
import { ArtItem } from '../../constants/interfaces';

import style from './style.module.scss';
import Subtitle from '../Subtitle';
import { useResize } from '../../hooks/useResize';
import { CARDS_COUNT, GALLERY_SIZES } from '../../constants/constants';

export const GalleryContext = createContext({
    page: 0,
    imgCount: 0,
    pageCount: 0,
    setPage: (page: number) => {},
    setImgCount: (count: number) => {},
    setPageCount: (count: number) => {},
});

const GalleryContainer = () => {
    const width = useResize();
    console.log(width);

    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const [imgCount, setImgCount] = useState(() => {
        if (width > 815) {
            return GALLERY_SIZES.large;
        } else if (width < 815 && width > 550) {
            return GALLERY_SIZES.medium;
        }
        return GALLERY_SIZES.small;
    });

    const [searchPromise, setSearchPromise] = useState<Promise<ArtItem[]>>(
        Promise.resolve([]),
    );

    useEffect(() => {
        setSearchPromise(getRandomArts(imgCount));
    }, []);

    const searchString = useRef('');

    // Обновляем количество страниц при изменении общего количества элементов
    useEffect(() => {
        if (imgCount > 0) {
            setPageCount(Math.ceil(CARDS_COUNT / imgCount));
        } else if (imgCount == 0) {
            setPageCount(0);
        }
    }, [imgCount]);

    return (
        <GalleryContext.Provider
            value={{
                page,
                imgCount,
                pageCount,
                setPage,
                setImgCount,
                setPageCount,
            }}
        >
            <div className={style.galleryContainer}>
                <SearchForm
                    onClick={(search: string) => {
                        searchString.current = search;
                        setSearchPromise(
                            serachByParams(search, page, imgCount),
                        );
                    }}
                />
                <Subtitle
                    subtitle='Topics for you'
                    title='Our special gallery'
                />
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
                    onClick={(page: number) => {
                        if (searchString.current.length !== 0) {
                            setSearchPromise(
                                serachByParams(
                                    searchString.current,
                                    page,
                                    imgCount,
                                ),
                            );
                        }
                    }}
                />
            </div>
        </GalleryContext.Provider>
    );
};

export default GalleryContainer;
