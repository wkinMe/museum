import style from './style.module.scss';

import FavoriteButton from '../../components/FavoriteButton';
import { Link } from 'react-router';
import { checkIsFavorite } from '../../utils/checkIsFavorite';
import { ArtItem } from '../../constants/interfaces';
import { useState } from 'react';
import Loader from '../Loader';

import NotFoundImg from '../../assets/NotFoundImg.svg';

interface CardProps {
    art: ArtItem;
    size: 'large' | 'small';
}

export default function Card({ art, size }: CardProps) {
    const [isFavorite, setIsFavorite] = useState<boolean>(checkIsFavorite(art));
    const [imageLoaded, setImagesLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);

    const {
        artist_title: artistName,
        is_public_domain: isPublic,
        image_url: img,
        id,
        title: artName,
    } = art;

    const styleName = size === 'large' ? style.card : style.miniCard;

    return (
        <div className={style.wrapper}>
            {!imageLoaded && <Loader size={size}/>}
            <Link
                to={`../details/${id}`}
                className={`${styleName} ${!imageLoaded ? style.hidden : ''}`}
            >
                <img
                    onLoad={() => setImagesLoaded(true)}
                    onError={() => {
                        setImagesLoaded(true);
                        setImgError(true);
                    }} // Устанавливаем ошибку загрузки
                    src={!imgError ? img : NotFoundImg}
                    alt={artName}
                    className={style.image}
                />
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
                        onClick={() => setIsFavorite(!isFavorite)}
                    />
                </div>
            </Link>
        </div>
    );
}
