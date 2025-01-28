import style from './style.module.scss';

import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';
import CardGrid from '../../components/CardGrid';
import { getRandomArts } from '../../utils/getRandomArts';
import { Suspense, useState } from 'react';
import Loader from '../../components/Loader';
import GalleryContainer from '../../components/GalleryContainer';

export default function Home() {
    const [randomCount] = useState(12);
    const [galleryCount] = useState(3);

    return (
        <div className={style.container}>
            <Title>
                let's find some <span>art</span> here!
            </Title>
            <div className={style.specialGallery}>
                <Subtitle
                    subtitle='Topics for you'
                    title='Our special gallery'
                />
                <GalleryContainer galleryCount={galleryCount} />
                
            </div>
            <Subtitle title='Other works for you' subtitle='Here some more' />
            <Suspense fallback={<Loader size='large' />}>
                <CardGrid cardPromise={getRandomArts(randomCount)} />
            </Suspense>
        </div>
    );
}
