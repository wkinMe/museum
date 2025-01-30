import Title from '../../components/Title';
import style from './style.module.scss';

import favoriteIcon from '../../assets/favorite.svg';
import Subtitle from '../../components/Subtitle';
import CardGrid from '../../components/CardGrid';
import { ArtItem } from '../../constants/interfaces';

export default function Favorite() {
    const favorites: ArtItem[] = JSON.parse(
        sessionStorage.getItem('favorite')!,
    );

    return (
        <div className={style.container}>
            {favorites.length ? (
                <>
                    <Title>
                        here are your
                        <br />
                        <img
                            style={{ width: '32px', height: '42px' }}
                            src={favoriteIcon}
                            alt=''
                        />{' '}
                        <span>favorite</span>
                    </Title>
                    <Subtitle
                        title='Your favorite list'
                        subtitle='Saved by you'
                    />
                    <CardGrid items={favorites} />
                </>
            ) : (
                <span className={style.noFavorites}>
                    You haven't added to favorites yet
                </span>
            )}
        </div>
    );
}
