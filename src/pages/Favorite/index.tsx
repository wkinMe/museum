import style from './style.module.scss';

import { useEffect, useState } from 'react';
import { sortByAlphabet } from '@utils/sortByAlphabet';
import { sortByStartDate } from '@utils/sortByStartDates';
import { sortByEndDate } from '@utils/sortByEndDate';
import Title from '@components/Title';
import Subtitle from '@components/Subtitle';
import CardGrid from '@components/CardGrid';
import favoriteIcon from '@assets/favorite.svg';
import { IArtItem } from '@src/types/IArtItem';
import { favoriteHelper } from '@src/helpers/FavoriteHelper';
import Loader from '@src/components/Loader';

export default function Favorite() {
    const [sortType, setSortType] = useState('');
    const [favorites, setFavorites] = useState<IArtItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        favoriteHelper.getFavoriteArts().then((data) => {
            setFavorites(data);
            setIsLoading(false);
        });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSortType = e.target.value;
        setSortType(selectedSortType);

        let sortedFavorites = [...favorites];
        switch (selectedSortType) {
            case 'alphabet': {
                sortedFavorites = sortByAlphabet(sortedFavorites);
                break;
            }
            case 'dateStart': {
                sortedFavorites = sortByStartDate(sortedFavorites);
                break;
            }
            case 'dateEnd': {
                sortedFavorites = sortByEndDate(sortedFavorites);
                break;
            }
        }
        setFavorites(sortedFavorites);
    };

    return (
        <section className={style.container}>
            {isLoading ? (
                <Loader size='large' />
            ) : favorites.length ? (
                <>
                    <Title>
                        here are your
                        <br />
                        <img src={favoriteIcon} alt='' /> <span>favorite</span>
                    </Title>

                    <Subtitle
                        title='Your favorite list'
                        subtitle='Saved by you'
                    />
                    <div className={style.sortBlock}>
                        <h1>Sorting</h1>
                        <div className={style.selectWrapper}>
                            <select value={sortType} onChange={handleChange}>
                                <option value='alphabet'>Alphabet</option>
                                <option value='dateStart'>Start date</option>
                                <option value='dateEnd'>End date</option>
                            </select>
                        </div>
                    </div>
                    <CardGrid items={favorites} />
                </>
            ) : (
                <span className={style.noFavorites}>
                    You haven't added to favorites yet
                </span>
            )}
        </section>
    );
}
