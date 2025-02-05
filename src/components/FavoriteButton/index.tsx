import style from './style.module.scss';

import favoriteIcon from '@assets/favorite.svg';
import { IArtItem } from '@src/types/IArtItem';
import { addFavorite } from '@utils/addFavorite';
import { removeFavorite } from '@utils/removeFavorite';

interface FavoriteButtonProps {
    isFavorite: boolean;
    art: IArtItem;
    onClick: () => void;
    isUp?: boolean;
}

export default function FavoriteButton({
    art,
    isFavorite,
    onClick,
    isUp,
}: FavoriteButtonProps) {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        onClick();
        e.preventDefault();
        if (isFavorite) {
            removeFavorite(art);
        } else {
            addFavorite(art);
        }
    };

    return (
        <div
            onClick={handleClick}
            className={`${style.favorite} ${isFavorite ? style.favoriteActive : ''} ${isUp ? style.up : ''}`}
        >
            <img src={favoriteIcon} alt='' />
        </div>
    );
}
