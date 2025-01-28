import style from './style.module.scss';

import Subtitle from '../../components/Subtitle';
import Gallery from '../../components/Gallery';
import Title from '../../components/Title';
import CardGrid from '../../components/CardGrid';
import { getRandomArts } from '../../utils/getRandomArts';
import { ArtItem } from '../../constants/interfaces';
import { Suspense, useRef, useState } from 'react';
import SearchForm from '../../components/SearchForm';
import PaginationButtons from '../../components/PaginationButtons';
import Loader from '../../components/Loader';
import { serachByParams } from '../../utils/searchByParams';

export default function Home() {
    const [galleryCount, setGalleryCount] = useState(3);
    const [randomCount, setRandomCount] = useState(12);

    const searchString = useRef('');

    const [searchPromise, setSearchPromise] = useState(
        getRandomArts(galleryCount),
    );

    return (
        <div className={style.container}>
            <Title>
                let's find some <span>art</span> here!
            </Title>
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
            <div className={style.specialGallery}>
                <Subtitle
                    subtitle='Topics for you'
                    title='Our special gallery'
                />
                <Suspense fallback={<Loader size='large'></Loader>}>
                    <Gallery cardPromise={searchPromise} />
                </Suspense>

                {/* <PaginationButtons
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
                /> */}
            </div>
            <Subtitle title='Other works for you' subtitle='Here some more' />
            <Suspense fallback={<Loader size='large' />}>
                <CardGrid cardPromise={getRandomArts(randomCount)} />
            </Suspense>
        </div>
    );
}
