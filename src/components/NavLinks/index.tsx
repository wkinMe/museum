import favoriteIcon from '@assets/favorite.svg';
import homeIcon from '@assets/home.svg';

import { urls } from '@constants/constants';

import { Link, useLocation } from 'react-router-dom';

import style from './style.module.scss';

interface NavLinksProps {
    isBurger: boolean;
    isOpen?: boolean;
    onClick?: () => void;
}

export default function NavLinks({ isBurger, isOpen, onClick }: NavLinksProps) {
    const { pathname } = useLocation();

    return (
        <nav
            className={`${style.nav} ${isBurger ? style.burger : ''} ${isOpen ? style.active : ''}`}
        >
            <ul className={style.menu}>
                {pathname !== urls.home && (
                    <li className={style.menuItem}>
                        <img src={homeIcon} alt='' />
                        <Link
                            to={urls.home}
                            className={style.menuItemLink}
                            onClick={onClick}
                        >
                            Home
                        </Link>
                    </li>
                )}

                <li className={style.menuItem}>
                    <img src={favoriteIcon} alt='' />
                    <Link
                        to={urls.favorite}
                        className={style.menuItemLink}
                        onClick={onClick}
                        data-testid='favoriteLink'
                    >
                        Your favorites
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
