import { favoriteHelper } from '@src/helpers/FavoriteHelper';
import style from './style.module.scss';

import favoriteIcon from '@assets/favorite.svg';

interface FavoriteButtonProps {
    isFavorite: boolean;
    artId: number;
    onClick: () => void;
    isUp?: boolean;
}

export default function FavoriteButton({
    artId,
    isFavorite,
    onClick,
    isUp,
}: FavoriteButtonProps) {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        onClick();
        e.preventDefault();
        if (isFavorite) {
            favoriteHelper.removeFromFavorites({ id: artId });
        } else {
            favoriteHelper.addToFavorites({ id: artId });
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
