import style from './style.module.scss';

import FavoriteButton from '../../components/FavoriteButton';
import { Link } from 'react-router';

export interface CardInfo {
    id: number;
    img: string;
    artName: string;
    artistName: string;
    isPublic: boolean;
    isFavorite: boolean;
}

export default function Card({
    id,
    img,
    artName,
    artistName,
    isPublic,
    isFavorite,
}: CardInfo) {
    return (
        <Link to={`details/${id}`} className={style.card}>
            <img src={img} alt='' />
            <div className={style.cardInfo}>
                <div className={style.cardInfoMain}>
                    <span className={style.artName}>{artName}</span>
                    <span className={style.artistName}>{artistName}</span>
                    <span className={style.public}>{isPublic && 'Public'}</span>
                </div>
                <FavoriteButton isFavorite={isFavorite} />
            </div>
        </Link>
    );
}
