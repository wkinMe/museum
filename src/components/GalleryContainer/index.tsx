import { Suspense, useRef, useState } from 'react';
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

const GalleryContainer = () => {
    const width = useResize();
    const [galleryCount] = useState(() => {
        if (width > 815) {
            return 3;
        } else if (width < 815 && width > 550) {
            return 2;
        } else if (width < 550) {
            return 1;
        }
    });
    const [pageCount, setPageCount] = useState(0);
    const [searchPromise, setSearchPromise] = useState<Promise<ArtItem[]>>(
        getRandomArts(galleryCount!),
    );

    const searchString = useRef('');

    return (
        <div className={style.galleryContainer}>
            <SearchForm
                onClick={(cardPromise: Promise<ArtItem[]>, search: string) => {
                    searchString.current = search;
                    setSearchPromise(cardPromise);
                    if (pageCount === 0) {
                        setPageCount(Math.ceil(10 / galleryCount!));
                    }
                }}
                count={galleryCount!}
            />
            <Subtitle subtitle='Topics for you' title='Our special gallery' />
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
            <PaginationButtons
                pageCount={pageCount}
                onClick={(page: number) => {
                    if (searchString.current.length !== 0) {
                        setSearchPromise(
                            serachByParams(
                                searchString.current,
                                page,
                                galleryCount,
                            ),
                        );
                    }
                }}
            />
        </div>
    );
};

export default GalleryContainer;
