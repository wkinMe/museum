import { MenuContext } from '@components/Layout';
import style from './style.module.scss';
import museumLogo from '@assets/museum_ligth_logo.svg';
import { useResize } from '@hooks/useResize';

import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BurgerMenu from '@components/BurgerMenu';
import NavLinks from '@components/NavLinks';

export default function Header() {
    const width = useResize();
    const { isModalOpen } = useContext(MenuContext);
    const { pathname } = useLocation();

    return (
        <header className={style.header}>
            <div className={style.container}>
                {pathname !== '/' ? (
                    <Link to='/'>
                        {' '}
                        <img src={museumLogo} alt='Museum of Art' />
                    </Link>
                ) : (
                    <img src={museumLogo} alt='Museum of Art' />
                )}

                {width < 600 ? (
                    <BurgerMenu />
                ) : (
                    <NavLinks isBurger={isModalOpen} />
                )}
            </div>
        </header>
    );
}
