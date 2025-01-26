import style from './style.module.scss';

import searchIcon from '../../assets/search.svg';

import Subtitle from '../../components/Subtitle';
import Gallery from '../../components/Gallery';
import Title from '../../components/Title';
import CardGrid from '../../components/CardGrid';
import { getRandomArts } from '../../utils/getRandomArts';
import { ArtItem } from '../../constants/interfaces';
import { useEffect, useState } from 'react';

export default function Home() {
    const [arts, setArts] = useState<ArtItem[]>([]);
    useEffect(() => {
        (async function () {
            setArts(await getRandomArts(9));
        })();
    }, []);

    return (
        <div className={style.container}>
            <Title>
                let's find some <span>art</span> here!
            </Title>
            <form>
                <input type='search' />
                <img src={searchIcon} alt='' />
            </form>
            <div className={style.specialGallery}>
                <Subtitle
                    subtitle='Topics for you'
                    title='Our special gallery'
                />
                <Gallery items={arts} />
            </div>
            <Subtitle title='Other works for you' subtitle='Here some more' />
            <CardGrid items={arts} />
        </div>
    );
}
