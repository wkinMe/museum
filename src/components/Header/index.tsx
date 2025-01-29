import style from './style.module.scss';
import museumLogo from '../../assets/museum_ligth_logo.svg';

import { useResize } from '../../hooks/useResize';
import NavLinks from '../NavLinks';
import BurgerMenu from '../BurgerMenu';
import { useContext } from 'react';
import { MenuContext } from '../Layout';

export default function Header() {
    const width = useResize();
    const { isModalOpen } = useContext(MenuContext);

    return (
        <header className={style.header}>
            <div className={style.container}>
                <img src={museumLogo} alt='Museum of Art' />
                {width < 600 ? (
                    <BurgerMenu />
                ) : (
                    <NavLinks isBurger={isModalOpen} />
                )}
            </div>
        </header>
    );
}
