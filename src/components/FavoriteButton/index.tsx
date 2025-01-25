import style from './style.module.scss';

import favoriteIcon from '../../assets/favorite.svg';

interface FavoriteButtonProps {
    isFavorite: boolean;
}

export default function FavoriteButton({ isFavorite }: FavoriteButtonProps) {
    return (
        <div
            className={`${style.favorite} ${isFavorite ? style.favoriteActive : ''}`}
        >
            <img src={favoriteIcon} alt='' />
        </div>
    );
}
