import style from './style.module.scss';

import FavoriteButton from '../../components/FavoriteButton';
import { Link } from 'react-router';
import { checkIsFavorite } from '../../utils/checkIsFavorite';
import { ArtItem } from '../../constants/interfaces';

interface CardProps {
    art: ArtItem;
    size: 'large' | 'small';
}

export default function Card({ art, size }: CardProps) {
    const {
        artist_title: artistName,
        is_public_domain: isPublic,
        image_url: img,
        id,
        title: artName,
    } = art;
    const isFavorite = checkIsFavorite(art);

    const styleName = size == 'large' ? style.card : style.miniCard;

    return (
        <Link to={`details/${id}`} className={styleName}>
            <img src={img} alt='' />
            <div className={style.info}>
                {size == 'large' ? (
                    <div className={style.infoMain}>
                        <span className={style.artName}>{artName}</span>
                        <span className={style.artistName}>{artistName}</span>
                        <span className={style.public}>
                            {isPublic && 'Public'}
                        </span>
                    </div>
                ) : (
                    <>
                        <span className={style.artName}>{artName}</span>
                        <span className={style.artistName}>{artistName}</span>
                        <span className={style.public}>
                            {isPublic && 'Public'}
                        </span>
                    </>
                )}
            </div>
            <FavoriteButton art={art} isFavorite={isFavorite} />
        </Link>
    );
}
