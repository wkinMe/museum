import style from './style.module.scss';

import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';
import CardGrid from '../../components/CardGrid';
import { getRandomArts } from '../../utils/getRandomArts';
import { Suspense, useState } from 'react';
import Loader from '../../components/Loader';
import GalleryContainer from '../../components/GalleryContainer';
import { useResize } from '../../hooks/useResize';

export default function Home() {
    const [randomCount] = useState(12);

    return (
        <div className={style.container}>
            <Title>
                let's find some <span>art</span> here!
            </Title>
            <GalleryContainer />
            <Subtitle title='Other works for you' subtitle='Here some more' />
            <Suspense fallback={<Loader size='large' />}>
                <CardGrid cardPromise={getRandomArts(randomCount)} />
            </Suspense>
        </div>
    );
}
