import style from './style.module.scss';
import museumLogo from '../../assets/meseum_dark_logo.svg';
import modsenLogo from '../../assets/modsen.png';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <img src={museumLogo} alt='Museum of Art' />
                <img src={modsenLogo} alt='Modsen' />
            </div>
        </footer>
    );
}
