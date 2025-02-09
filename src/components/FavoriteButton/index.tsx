import { favoriteHelper } from '@src/helpers/FavoriteHelper';

import favoriteIcon from '@assets/favorite.svg';

import style from './style.module.scss';

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
            data-testid='favoriteBtn'
        >
            <img src={favoriteIcon} alt='' />
        </div>
    );
}
