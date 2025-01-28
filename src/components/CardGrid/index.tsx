import Card from '../Card';

import { use } from 'react';

import style from './style.module.scss';
import { ArtItem } from '../../constants/interfaces';

export default function CardGrid({
    cardPromise,
}: {
    cardPromise?: Promise<ArtItem[]>;
}) {
    let cards;
    if (cardPromise) {
        cards = use(cardPromise);
    } else {
        cards = JSON.parse(sessionStorage.getItem('favorite')!);
    }

    return (
        <div className={style.cardGrid}>
            {cards.map((i: ArtItem) => {
                return <Card size='small' art={i} />;
            })}
        </div>
    );
}
