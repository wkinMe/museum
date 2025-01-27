import style from './style.module.scss';

import Subtitle from '../../components/Subtitle';
import Gallery from '../../components/Gallery';
import Title from '../../components/Title';
import CardGrid from '../../components/CardGrid';
import { getRandomArts } from '../../utils/getRandomArts';
import { ArtItem } from '../../constants/interfaces';
import { useEffect, useState } from 'react';
import SearchForm from '../../components/SerachForm';
import PaginationButtons from '../../components/PaginationButtons';
import { serachByParams } from '../../utils/searchByParams';

export default function Home() {
    const [searchedArts, setSearchedArts] = useState<ArtItem[]>([]);
    const [arts, setArts] = useState<ArtItem[]>([]);

    const [searchString, setSearchString] = useState('');

    useEffect(() => {
        (async function () {
            const arts = await getRandomArts(9);
            setArts(arts);
            setSearchedArts(arts);
        })();
    }, []);

    return (
        <div className={style.container}>
            <Title>
                let's find some <span>art</span> here!
            </Title>
            <SearchForm
                onClick={(arts: ArtItem[], searchString: string) => {
                    setSearchString(searchString);
                    setSearchedArts(arts);
                }}
            />
            <div className={style.specialGallery}>
                <Subtitle
                    subtitle='Topics for you'
                    title='Our special gallery'
                />
                <Gallery items={searchedArts} />
                <PaginationButtons
                    pageCount={10}
                    onClick={(page: number) => {
                        (async function () {
                            setSearchedArts(
                                await serachByParams(searchString, page, 3),
                            );
                        })();
                    }}
                />
            </div>
            <Subtitle title='Other works for you' subtitle='Here some more' />
            <CardGrid items={arts} />
        </div>
    );
}
