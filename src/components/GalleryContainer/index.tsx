import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import ErrorText from '@components/ErrorText';
import Gallery from '@components/Gallery';
import Loader from '@components/Loader';
import PaginationButtons from '@components/PaginationButtons';
import SearchForm from '@components/SearchForm';
import Subtitle from '@components/Subtitle';

import { useGalleryLogic } from '@hooks/useGalleryLogic';
import { useGallerySize } from '@hooks/useGallerySize';

import { Suspense } from 'react';

import style from './style.module.scss';

export default function GalleryContainer() {
    const imgCount = useGallerySize();
    const { pageCount, searchPromise, onSearch, handlePaginate } =
        useGalleryLogic(imgCount);

    return (
        <div className={style.galleryContainer}>
            <SearchForm onClick={onSearch} />
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
