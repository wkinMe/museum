import style from './style.module.scss';

import searchIcon from '../../assets/search.svg';

import Subtitle from '../../components/Subtitle';
import Gallery from '../../components/Gallery';

export default function Home() {
    return (
        <div className={style.container}>
            <h1>
                let's find some <span>art</span> here!
            </h1>
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
        </div>
    );
}
