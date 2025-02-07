import CardGrid from '@src/components/CardGrid';
import ErrorBoundary from '@src/components/ErrorBoundary/ErrorBoundary';
import Loader from '@src/components/Loader';
import SortBlock from '@src/components/SortBlock';
import { SORTING_FAVORITE_TYPES } from '@src/constants/constants';
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

        let sortedFavorites = [...favorites];
        switch (selectedSortType) {
            case SORTING_FAVORITE_TYPES.ALPHABET: {
                sortedFavorites = sortByAlphabet(sortedFavorites);
                break;
            }
            case SORTING_FAVORITE_TYPES.START_DATE: {
                sortedFavorites = sortByStartDate(sortedFavorites);
                break;
            }
            case SORTING_FAVORITE_TYPES.END_DATE: {
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
                        <img
                            src={favoriteIcon}
                            alt=''
                            className={style.favorite}
                        />
                        <span>favorite</span>
                    </Title>

                    <Subtitle
                        title='Your favorite list'
                        subtitle='Saved by you'
                    />
                    <SortBlock
                        options={Object.values(SORTING_FAVORITE_TYPES)}
                        onChange={handleChange}
                    />
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
