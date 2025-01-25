import style from './style.module.scss';
import favoriteIcon from '../../assets/favorite.svg';

interface CardProps {
    img: string;
    artName: string;
    artistName: string;
    isPublic: boolean;
    isFavorite: boolean;
}

export default function Card({
    img,
    artName,
    artistName,
    isPublic,
    isFavorite,
}: CardProps) {
    return (
        <div className={style.card}>
            <img src={img} alt='' />
            <div className={style.cardInfo}>
                <div className={style.cardInfoMain}>
                    <span className={style.artName}>{artName}</span>
                    <span className={style.artistName}>{artistName}</span>
                    <span className={style.public}>{isPublic && 'Public'}</span>
                </div>
                <div
                    className={`${style.favorite} ${isFavorite ? style.favoriteActive : ''}`}
                >
                    <img src={favoriteIcon} alt='' />
                </div>
            </div>
        </div>
    );
}
