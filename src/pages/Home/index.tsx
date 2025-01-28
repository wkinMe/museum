import style from './style.module.scss';

import Subtitle from '../../components/Subtitle';
import Gallery from '../../components/Gallery';
import Title from '../../components/Title';
import CardGrid from '../../components/CardGrid';
import { getRandomArts } from '../../utils/getRandomArts';
import { ArtItem } from '../../constants/interfaces';
import { Suspense, useState } from 'react';
import SearchForm from '../../components/SearchForm';
import PaginationButtons from '../../components/PaginationButtons';
import { serachByParams } from '../../utils/searchByParams';
import Loader from '../../components/Loader';

export default function Home() {
    const [galleryCount, setGalleryCount] = useState(3);
    const [randomCount, setRandomCount] = useState(12);

    const [searchPromise, setSearchPromise] = useState(
        getRandomArts(galleryCount),
    );

    return (
        <div className={style.container}>
            <Title>
                let's find some <span>art</span> here!
            </Title>
            <SearchForm
                onClick={(cardPromise: Promise<ArtItem[]>) => {
                    if (cardPromise) {
                        setSearchPromise(cardPromise);
                    } else {
                        setSearchPromise(getRandomArts(galleryCount));
                    }
                }}
            />
            <div className={style.specialGallery}>
                <Subtitle
                    subtitle='Topics for you'
                    title='Our special gallery'
                />
                <Suspense fallback={<Loader size='large'></Loader>}>
                    <Gallery cardPromise={searchPromise} />
                </Suspense>

                <PaginationButtons
                    pageCount={10}
                    onClick={(page: number) => page}
                />
            </div>
            <Subtitle title='Other works for you' subtitle='Here some more' />
            <Suspense fallback={<Loader size='large' />}>
                <CardGrid cardPromise={getRandomArts(randomCount)} />
            </Suspense>
        </div>
    );
}
