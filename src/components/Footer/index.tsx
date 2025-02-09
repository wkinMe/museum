import museumLogo from '@assets/meseum_dark_logo.svg';
import modsenLogo from '@assets/modsen.png';

import { urls } from '@constants/constants';

import { Link } from 'react-router-dom';

import style from './style.module.scss';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <Link to={urls.home}>
                    <img src={museumLogo} alt='Museum of Art' />
                </Link>
                <img src={modsenLogo} alt='Modsen' />
            </div>
        </footer>
    );
}
