import CardGrid from '@components/CardGrid';
import GalleryContainer from '@components/GalleryContainer';
import Loader from '@components/Loader';
import Subtitle from '@components/Subtitle';
import Title from '@components/Title';

import { ARTS_IN_HOME_CARD_GRID } from '@constants/constants';

import { getArtsFromQuery } from '@utils/getArtsFromQuery';

import { getRandomArts } from '@api/getRandomArts';

import { Suspense } from 'react';

import style from './style.module.scss';

export default function Home() {
    return (
        <section className={style.container}>
            <Title>
                let's find some <span>art</span> here!
            </Title>
            <GalleryContainer />
            <Subtitle title='Other works for you' subtitle='Here some more' />
            <Suspense fallback={<Loader size='large' />}>
                <CardGrid
                    cardPromise={getArtsFromQuery(
                        getRandomArts(ARTS_IN_HOME_CARD_GRID),
                    )}
                />
            </Suspense>
        </section>
    );
}
