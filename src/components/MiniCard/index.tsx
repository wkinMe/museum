import { CardInfo } from '../Card';
import style from './style.module.scss';

import FavoriteButton from '../FavoriteButton';
import { Link } from 'react-router-dom';

export default function MiniCard({
    id,
    img,
    artName,
    artistName,
    isPublic,
    isFavorite,
}: CardInfo) {
    console.log(id, img);

    return (
        <Link to={`details/${id}`} className={style.miniCard}>
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
