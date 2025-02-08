import { BURGER_MENU_APPEAR_WIDTH } from '@src/constants/constants';

import museumLogo from '@assets/museum_ligth_logo.svg';

import BurgerMenu from '@components/BurgerMenu';
import { MenuContext } from '@components/Layout';
import NavLinks from '@components/NavLinks';

import { useResize } from '@hooks/useResize';

import { useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import style from './style.module.scss';

export default function Header() {
    const width = useResize();
    const { isModalOpen, toggleMenu } = useContext(MenuContext);
    const { pathname } = useLocation();

    useEffect(() => {
        if (isModalOpen && width > BURGER_MENU_APPEAR_WIDTH) {
            toggleMenu();
        }
    }, [width, isModalOpen, toggleMenu]);

    return (
        <header className={style.header}>
            <div className={style.container}>
                {pathname !== '/' ? (
                    <Link to='/'>
                        <img src={museumLogo} alt='Museum of Art' />
                    </Link>
                ) : (
                    <img src={museumLogo} alt='Museum of Art' />
                )}

                {width < BURGER_MENU_APPEAR_WIDTH ? (
                    <BurgerMenu />
                ) : (
                    <NavLinks
                        isBurger={
                            width < BURGER_MENU_APPEAR_WIDTH
                                ? isModalOpen
                                : false
                        }
                    />
                )}
            </div>
        </header>
    );
}
