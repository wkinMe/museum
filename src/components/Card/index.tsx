import { favoriteHelper } from '@src/helpers/FavoriteHelper';

import FavoriteButton from '@components/FavoriteButton';
import LoadImage from '@components/LoadImage';

import { CARDS_SIZES, PUBLIC_DOMAIN, urls } from '@constants/constants';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './style.module.scss';

interface CardProps {
    artist_title: string;
    is_public_domain: boolean;
    image_url: string;
    id: number;
    title: string;
    size: CARDS_SIZES;
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

    const styleName = size === CARDS_SIZES.LARGE ? style.card : style.miniCard;

    const handleFavoriteBtnClick = () => {
        setIsFavorite((prev) => !prev);
    };

    return (
        <div className={style.wrapper}>
            <Link to={`/${urls.details(id)}`} className={`${styleName}`}>
                <LoadImage src={image_url} size={size} />
                <div className={style.info}>
                    <div className={style.infoMain}>
                        <span className={style.artName}>{title}</span>
                        <span className={style.artistName}>{artist_title}</span>
                        <span className={style.public}>
                            {is_public_domain
                                ? PUBLIC_DOMAIN.PUBLIC
                                : PUBLIC_DOMAIN.PRIVATE}
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
