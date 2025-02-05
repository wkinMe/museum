import style from './style.module.scss';

import { use } from 'react';
import { IArtItem } from '@src/types/IArtItem';
import Card from '@components/Card';

export interface ArtCollection {
    cardPromise: Promise<IArtItem[]>;
}

export default function Gallery({ cardPromise }: ArtCollection) {
    const cards: IArtItem[] = use(cardPromise);

    return (
        <div className={style.gallery}>
            {cards.map((i) => {
                return <Card key={i.id} size='large' art={i} />;
            })}
        </div>
    );
}
