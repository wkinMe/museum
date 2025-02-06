import CardGrid from '@src/components/CardGrid';
import ErrorBoundary from '@src/components/ErrorBoundary/ErrorBoundary';
import Loader from '@src/components/Loader';
import { favoriteHelper } from '@src/helpers/FavoriteHelper';
import { IArtItem } from '@src/types/IArtItem';

import favoriteIcon from '@assets/favorite.svg';

import Subtitle from '@components/Subtitle';
import Title from '@components/Title';

import { sortByAlphabet } from '@utils/sortByAlphabet';
import { sortByEndDate } from '@utils/sortByEndDate';
import { sortByStartDate } from '@utils/sortByStartDates';

import { useEffect, useState } from 'react';

import style from './style.module.scss';

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
                    <ErrorBoundary fallback={'Card grid render error'}>
                        <CardGrid items={favorites} />
                    </ErrorBoundary>
                </>
            ) : (
                <span className={style.noFavorites}>
                    You haven't added to favorites yet
                </span>
            )}
        </section>
    );
}
