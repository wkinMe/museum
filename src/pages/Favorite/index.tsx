import Title from '../../components/Title';
import style from './style.module.scss';

import favoriteIcon from '../../assets/favorite.svg';
import Subtitle from '../../components/Subtitle';
import CardGrid from '../../components/CardGrid';
import { IArtItem } from '../../types/IArtItem';
import { useState } from 'react';
import { sortByAlphabet } from '../../utils/sortByAlphabet';
import { sortByStartDate } from '../../utils/sortByStartDates';
import { sortByEndDate } from '../../utils/sortByEndDate';

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
    console.log(favorites);

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
                    <div className={style.sortBlock}>
                        <h1>Sorting</h1>
                        <div className={style.selectWrapper}>
                            <select
                                value={sortType}
                                onChange={(e) =>
                                    setSortType(e.currentTarget.value)
                                }
                            >
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
        </div>
    );
}
