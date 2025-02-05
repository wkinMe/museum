import style from './style.module.scss';

import { Link } from 'react-router';
import { IArtItem } from '@src/types/IArtItem';
import { useState } from 'react';
import { checkIsFavorite } from '@utils/checkIsFavorite';
import LoadImage from '@components/LoadImage';
import FavoriteButton from '@components/FavoriteButton';

interface CardProps {
    art: IArtItem;
    size: 'large' | 'small';
}

export default function Card({ art, size }: CardProps) {
    const [isFavorite, setIsFavorite] = useState<boolean>(checkIsFavorite(art));

    const {
        artist_title: artistName,
        is_public_domain: isPublic,
        image_url: img,
        id,
        title: artName,
    } = art;

    const styleName = size === 'large' ? style.card : style.miniCard;

    const handleFavoriteBtnClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={style.wrapper}>
            <Link to={`../details/${id}`} className={`${styleName}`}>
                <LoadImage src={img} size={size} />
                <div className={style.info}>
                    <div className={style.infoMain}>
                        <span className={style.artName}>{artName}</span>
                        <span className={style.artistName}>{artistName}</span>
                        <span className={style.public}>
                            {isPublic && 'Public'}
                        </span>
                    </div>
                    <FavoriteButton
                        art={art}
                        isFavorite={isFavorite}
                        onClick={handleFavoriteBtnClick}
                    />
                </div>
            </Link>
        </div>
    );
}
