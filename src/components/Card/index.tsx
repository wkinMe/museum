import { favoriteHelper } from '@src/helpers/FavoriteHelper';

import FavoriteButton from '@components/FavoriteButton';
import LoadImage from '@components/LoadImage';

import { useState } from 'react';
import { Link } from 'react-router';

import style from './style.module.scss';

interface CardProps {
    artist_title: string;
    is_public_domain: boolean;
    image_url: string;
    id: number;
    title: string;
    size: 'large' | 'small';
}

export default function Card({
    artist_title,
    is_public_domain,
    image_url,
    id,
    title,
    size,
}: CardProps) {
    const [isFavorite, setIsFavorite] = useState<boolean>(
        favoriteHelper.isFavorite({ id }),
    );

    const styleName = size === 'large' ? style.card : style.miniCard;

    const handleFavoriteBtnClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={style.wrapper}>
            <Link to={`../details/${id}`} className={`${styleName}`}>
                <LoadImage src={image_url} size={size} />
                <div className={style.info}>
                    <div className={style.infoMain}>
                        <span className={style.artName}>{title}</span>
                        <span className={style.artistName}>{artist_title}</span>
                        <span className={style.public}>
                            {is_public_domain && 'Public'}
                        </span>
                    </div>
                    <FavoriteButton
                        artId={id}
                        isFavorite={isFavorite}
                        onClick={handleFavoriteBtnClick}
                    />
                </div>
            </Link>
        </div>
    );
}
