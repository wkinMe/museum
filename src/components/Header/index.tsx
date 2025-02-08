import { BURGER_MENU_APPEAR_WIDTH } from '@src/constants/constants';
import { useHeader } from '@src/hooks/useHeader';

import museumLogo from '@assets/museum_ligth_logo.svg';

import BurgerMenu from '@components/BurgerMenu';
import { MenuContext } from '@components/Layout';
import NavLinks from '@components/NavLinks';

import { useResize } from '@hooks/useResize';

import { useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import style from './style.module.scss';

export default function Header() {
    const { isBurger, isHome } = useHeader();

    return (
        <header className={style.header}>
            <div className={style.container}>
                {!isHome ? (
                    <Link to='/'>
                        <img src={museumLogo} alt='Museum of Art' />
                    </Link>
                ) : (
                    <img src={museumLogo} alt='Museum of Art' />
                )}

                {isBurger ? <BurgerMenu /> : <NavLinks isBurger={isBurger} />}
            </div>
        </header>
    );
}
