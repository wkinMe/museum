import style from './style.module.scss';

import FavoriteButton from '../../components/FavoriteButton';

export interface CardInfo {
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
}: CardInfo) {
    return (
        <div className={style.card}>
            <img src={img} alt='' />
            <div className={style.cardInfo}>
                <div className={style.cardInfoMain}>
                    <span className={style.artName}>{artName}</span>
                    <span className={style.artistName}>{artistName}</span>
                    <span className={style.public}>{isPublic && 'Public'}</span>
                </div>
                <FavoriteButton isFavorite={isFavorite} />
            </div>
        </div>
    );
}
