import style from './style.module.scss';

import FavoriteButton from '../FavoriteButton';
import { Link } from 'react-router-dom';
import { ArtItem } from '../../constants/interfaces';
import { checkIsFavorite } from '../../utils/checkIsFavorite';

export interface MiniCardProps {
    art: ArtItem;
}

export default function MiniCard({ art }: MiniCardProps) {
    const {
        artist_title: artistName,
        is_public_domain: isPublic,
        image_url: img,
        id,
        title: artName,
    } = art;
    const isFavorite = checkIsFavorite(art);

    return (
        <Link to={`details/${id}`} className={style.miniCard}>
            <img src={img} alt='' />
            <div className={style.info}>
                <span className={style.artName}>{artName}</span>
                <span className={style.artistName}>{artistName}</span>
                <span className={style.public}>{isPublic && 'Public'}</span>
            </div>
            <FavoriteButton art={art} isFavorite={isFavorite} />
        </Link>
    );
}
