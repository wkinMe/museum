import style from './style.module.scss';


import { useState } from 'react';
import { sortByAlphabet } from '@utils/sortByAlphabet';
import { sortByStartDate } from '@utils/sortByStartDates';
import { sortByEndDate } from '@utils/sortByEndDate';
import Title from '@components/Title';
import Subtitle from '@components/Subtitle';
import CardGrid from '@components/CardGrid';
import favoriteIcon from "@assets/favorite.svg"
import { IArtItem } from '@src/types/IArtItem';


export default function Favorite() {
    const [sortType, setSortType] = useState('');

    let sortFunction = (arts: IArtItem[]) => arts;

    switch (sortType) {
        case 'alphabet': {
            sortFunction = sortByAlphabet;
            break;
        }
        case 'dateStart': {
            sortFunction = sortByStartDate;
            break;
        }
        case 'dateEnd': {
            sortFunction = sortByEndDate;
            break;
        }
    }

    const favorites: IArtItem[] = sortFunction(
        JSON.parse(sessionStorage.getItem('favorite')!),
    );

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
        setSortType(e.currentTarget.value);

    return (
        <section className={style.container}>
            {favorites.length ? (
                <>
                    <Title>
                        here are your
                        <br />
                        <img
                            src={favoriteIcon}
                            alt=''
                        />{' '}
                        <span>favorite</span>
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
