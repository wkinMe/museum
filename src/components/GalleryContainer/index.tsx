import { Suspense, useRef, useState, useEffect } from 'react';
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
        return 1; // Значение по умолчанию
    });
    const [pageCount, setPageCount] = useState(0);
    const [searchPromise, setSearchPromise] = useState<Promise<ArtItem[]>>(
        getRandomArts(galleryCount!),
    );
    const [totalItems, setTotalItems] = useState(1); // Общее количество элементов

    const searchString = useRef('');

    // Обновляем количество страниц при изменении общего количества элементов
    useEffect(() => {
        if (totalItems > 0 && galleryCount > 0) {
            setPageCount(Math.ceil(totalItems / galleryCount));
        } else if (totalItems == 0) {
            setPageCount(0);
        }
    }, [totalItems, galleryCount]);

    // Функция для обновления searchPromise и общего количества элементов
    const updateSearchPromise = async (promise: Promise<ArtItem[]>) => {
        const data = await promise;
        setTotalItems(data.length); // Обновляем общее количество элементов
        setSearchPromise(Promise.resolve(data)); // Обновляем searchPromise
    };

    return (
        <div className={style.galleryContainer}>
            <SearchForm
                onClick={(cardPromise: Promise<ArtItem[]>, search: string) => {
                    searchString.current = search;
                    updateSearchPromise(cardPromise); // Используем новую функцию
                }}
                count={10}
            />
            <Subtitle subtitle='Topics for you' title='Our special gallery' />
            {totalItems ? (
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
                        const newPromise = serachByParams(
                            searchString.current,
                            page,
                            galleryCount,
                        );
                        setSearchPromise(newPromise); // Используем новую функцию
                    }
                }}
            />
        </div>
    );
};

export default GalleryContainer;
