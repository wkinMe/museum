import Card from '../Card';

import { use } from 'react';

import style from './style.module.scss';
import { ArtItem } from '../../constants/interfaces';

export default function CardGrid({
    cardPromise,
}: {
    cardPromise: Promise<ArtItem[]>;
}) {
    const cards = use(cardPromise);

    return (
        <div className={style.cardGrid}>
            {cards.map((i: ArtItem) => {
                return <Card size='small' art={i} />;
            })}
        </div>
    );
}
