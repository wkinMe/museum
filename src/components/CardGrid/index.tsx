import Card from '../Card';

import { use } from 'react';

import style from './style.module.scss';
import { ArtItem } from '../../constants/interfaces';

interface CardGridProps {
    cardPromise?: Promise<ArtItem[]>;
    items?: ArtItem[];
}

export default function CardGrid({ cardPromise, items }: CardGridProps) {
    let cards: ArtItem[];
    if (cardPromise) {
        cards = use(cardPromise);
    } else {
        cards = items!;
    }

    return (
        <div className={style.cardGrid}>
            {cards.map((i: ArtItem) => {
                return <Card size='small' art={i} />;
            })}
        </div>
    );
}
