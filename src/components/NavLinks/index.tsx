import { Link, useLocation } from 'react-router-dom';

import style from './style.module.scss';

import favoriteIcon from '../../assets/favorite.svg';
import homeIcon from '../../assets/home.svg';

interface NavLinksProps {
    isBurger: boolean;
    isOpen?: boolean;
}

export default function NavLinks({ isBurger, isOpen }: NavLinksProps) {
    const { pathname } = useLocation();

    return (
        <nav
            className={`${style.nav} ${isBurger ? style.burger : ''} ${isOpen ? style.active : ''}`}
        >
            <ul className={style.menu}>
                {pathname !== '/' && (
                    <li className={style.menuItem}>
                        <img src={homeIcon} alt='' />
                        <Link to='/' className={style.menuItemLink}>
                            Home
                        </Link>
                    </li>
                )}

                <li className={style.menuItem}>
                    <img src={favoriteIcon} alt='' />
                    <Link to='/favorite' className={style.menuItemLink}>
                        Favorite
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
