import { Suspense, useRef, useState } from 'react';
import Gallery from '../../components/Gallery';
import Loader from '../../components/Loader';
import { getRandomArts } from '../../utils/getRandomArts';
import { serachByParams } from '../../utils/searchByParams';
import SearchForm from '../../components/SearchForm';
import PaginationButtons from '../../components/PaginationButtons';
import { ArtItem } from '../../constants/interfaces';

import style from './style.module.scss';

interface GalleryContainerProps {
    galleryCount: number;
}

const GalleryContainer = ({ galleryCount }: GalleryContainerProps) => {
    const [searchPromise, setSearchPromise] = useState(
        getRandomArts(galleryCount),
    );
    const searchString = useRef('');

    return (
        <div className={style.galleryContainer}>
            <SearchForm
                onClick={(cardPromise: Promise<ArtItem[]>, search: string) => {
                    searchString.current = search;
                    if (cardPromise) {
                        setSearchPromise(cardPromise);
                    } else {
                        setSearchPromise(getRandomArts(galleryCount));
                    }
                }}
            />
            <Suspense
                fallback={
                    <Loader
                        size='large'
                        style={{ height: '100%', width: '40%' }}
                    />
                }
            >
                <Gallery cardPromise={searchPromise} />
            </Suspense>
            <PaginationButtons
                pageCount={5}
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
