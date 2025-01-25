import style from './style.module.scss';

import favoriteIcon from '../../assets/favorite.svg';
import museumLogo from '../../assets/meseum_logo.svg';

import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <img src={museumLogo} alt='Museum of Art' />
                <nav className={style.nav}>
                    <ul className={style.navMenu}>
                        <li className={style.navMenuItem}>
                            <img src={favoriteIcon} alt='' />
                            <Link to='/favorite'></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
