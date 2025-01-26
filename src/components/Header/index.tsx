import style from './style.module.scss';

import favoriteIcon from '../../assets/favorite.svg';
import homeIcon from '../../assets/home.svg';
import museumLogo from '../../assets/museum_ligth_logo.svg';

import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const { pathname } = useLocation();

    return (
        <header className={style.header}>
            <div className={style.container}>
                <img src={museumLogo} alt='Museum of Art' />
                <nav className={style.nav}>
                    <ul className={style.navMenu}>
                        {pathname !== '/' && (
                            <li className={style.navMenuItem}>
                                <img src={homeIcon} alt='' />
                                <Link to='/' className={style.navMenuItemLink}>
                                    Home
                                </Link>
                            </li>
                        )}

                        <li className={style.navMenuItem}>
                            <img src={favoriteIcon} alt='' />
                            <Link
                                to='/favorite'
                                className={style.navMenuItemLink}
                            >
                                Favorite
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
