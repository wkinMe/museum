import style from './style.module.scss';

import searchIcon from '../../assets/search.svg';

import Subtitle from '../../components/Subtitle';
import Gallery from '../../components/Gallery';
import Title from '../../components/Title';
import CardGrid from '../../components/CardGrid';

export default function Home() {
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
                <Gallery />
            </div>
            <CardGrid items={new Array(9).fill(null)} />
        </div>
    );
}
