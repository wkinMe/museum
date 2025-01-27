import style from './style.module.scss';

import favoriteIcon from '../../assets/favorite.svg';
import { removeFavorite } from '../../utils/removeFavorite';
import { ArtItem } from '../../constants/interfaces';
import { addFavorite } from '../../utils/addFavorite';

interface FavoriteButtonProps {
    isFavorite: boolean;
    art: ArtItem;
}

export default function FavoriteButton({
    art,
    isFavorite,
}: FavoriteButtonProps) {
    const handleClick = () => {
        if (isFavorite) {
            removeFavorite(art);
        } else {
            addFavorite(art);
        }
    };

    return (
        <div
            onClick={handleClick}
            className={`${style.favorite} ${isFavorite ? style.favoriteActive : ''}`}
        >
            <img src={favoriteIcon} alt='' />
        </div>
    );
}
