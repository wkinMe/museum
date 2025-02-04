import Card from '../Card';

import { use } from 'react';

import style from './style.module.scss';
import { IArtItem } from '../../types/IArtItem';

interface CardGridProps {
    cardPromise?: Promise<IArtItem[]>;
    items?: IArtItem[];
}

export default function CardGrid({ cardPromise, items }: CardGridProps) {
    let cards: IArtItem[];
    if (cardPromise) {
        cards = use(cardPromise);
    } else {
        cards = items!;
    }

    return (
        <div className={style.cardGrid} data-testid='cardGrid'>
            {cards.map((i) => {
                return <Card key={i.id} size='small' art={i} />;
            })}
        </div>
    );
}
