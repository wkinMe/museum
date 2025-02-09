import { useHeader } from '@src/hooks/useHeader';

import museumLogo from '@assets/museum_ligth_logo.svg';

import BurgerMenu from '@components/BurgerMenu';
import NavLinks from '@components/NavLinks';
import { Link } from 'react-router-dom';

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
