import style from './style.module.scss';

import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';
import CardGrid from '../../components/CardGrid';
import { getRandomArts } from '../../api/getRandomArts';
import { Suspense, useState } from 'react';
import Loader from '../../components/Loader';
import GalleryContainer from '../../components/GalleryContainer';
import { getArtsFromQuery } from '../../utils/getArtsFromQuery';

export default function Home() {
    const [randomCount] = useState(12);

    return (
        <section className={style.container}>
            <Title>
                let's find some <span>art</span> here!
            </Title>
            <GalleryContainer />
            <Subtitle title='Other works for you' subtitle='Here some more' />
            <Suspense fallback={<Loader size='large' />}>
                <CardGrid
                    cardPromise={getArtsFromQuery(getRandomArts(randomCount))}
                />
            </Suspense>
        </section>
    );
}
