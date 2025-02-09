import CardGrid from '@src/components/CardGrid';
import { useGetArtsFromQuery } from '@src/hooks/useGetArtsFromQuery';

import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import ErrorText from '@components/ErrorText';
import GalleryContainer from '@components/GalleryContainer';
import Loader from '@components/Loader';
import Subtitle from '@components/Subtitle';
import Title from '@components/Title';

import {
    ARTS_IN_HOME_CARD_GRID,
    CARDS_SIZES,
    RANDOM_HOME_CARD_GRID_PAGE,
} from '@constants/constants';

import { getRandomArts } from '@api/getRandomArts';

import { Suspense } from 'react';

import style from './style.module.scss';

export default function Home() {
    const getArtsFromQuery = useGetArtsFromQuery();

    return (
        <section className={style.container}>
            <Title>
                let's find some <span>art</span> here!
            </Title>
            <GalleryContainer />
            <Subtitle title='Other works for you' subtitle='Here some more' />
            <ErrorBoundary
                fallback={<ErrorText text='Card grid render error' />}
            >
                <Suspense fallback={<Loader size={CARDS_SIZES.LARGE} />}>
                    <CardGrid
                        cardPromise={getArtsFromQuery(
                            getRandomArts(
                                ARTS_IN_HOME_CARD_GRID,
                                RANDOM_HOME_CARD_GRID_PAGE,
                            ),
                        )}
                    />
                </Suspense>
            </ErrorBoundary>
        </section>
    );
}
