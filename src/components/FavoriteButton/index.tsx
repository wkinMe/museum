import style from './style.module.scss';

import favoriteIcon from '../../assets/favorite.svg';
import { removeFavorite } from '../../utils/removeFavorite';
import { IArtItem } from '../../types/IArtItem';
import { addFavorite } from '../../utils/addFavorite';
import { ComponentPropsWithoutRef } from 'react';

interface FavoriteButtonProps extends ComponentPropsWithoutRef<'div'> {
    isFavorite: boolean;
    art: IArtItem;
    onClick: () => void;
}

export default function FavoriteButton({
    art,
    isFavorite,
    onClick,
    ...props
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
            {...props}
            onClick={handleClick}
            className={`${style.favorite} ${isFavorite ? style.favoriteActive : ''}`}
        >
            <img src={favoriteIcon} alt='' />
        </div>
    );
}
