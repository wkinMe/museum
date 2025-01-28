import style from './style.module.scss';

import Card from '../../components/Card';
import { ArtItem } from '../../constants/interfaces';

import { use } from 'react';

export interface ArtCollection {
    cardPromise: Promise<ArtItem[]>;
}

export default function Gallery({ cardPromise }: ArtCollection) {
    const cards = use(cardPromise);

    return (
        <>
            <div className={style.gallery}>
                {cards.map((i) => {
                    return <Card size='large' art={i}/>;
                })}
            </div>
        </>
    );
}
