import { CardInfo } from '../Card';
import style from './style.module.scss';

import FavoriteButton from '../FavoriteButton';
import { Link } from 'react-router-dom';

export default function MiniCard({
    img,
    artName,
    artistName,
    isPublic,
    isFavorite,
}: CardInfo) {
    return (
        <Link to='details/1' className={style.miniCard}>
            <img src={img} alt='' />
            <div className={style.info}>
                <span className={style.artName}>{artName}</span>
                <span className={style.artistName}>{artistName}</span>
                <span className={style.public}>{isPublic && 'Public'}</span>
            </div>
            <FavoriteButton isFavorite={isFavorite} />
        </Link>
    );
}
