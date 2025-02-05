import style from './style.module.scss';

import { Suspense } from 'react';

import Subtitle from '@components/Subtitle';
import Title from '@components/Title';
import GalleryContainer from '@components/GalleryContainer';
import CardGrid from '@components/CardGrid';
import Loader from '@components/Loader';
import { getArtsFromQuery } from '@utils/getArtsFromQuery';
import { ARTS_IN_HOME_CARD_GRID } from '@constants/constants';
import { getRandomArts } from '@api/getRandomArts';

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
