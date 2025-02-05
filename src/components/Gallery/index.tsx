import style from './style.module.scss';

import { ComponentPropsWithRef, use } from 'react';
import { IArtItem } from '../../types/IArtItem';
import Card from '../Card';

export interface ArtCollection extends ComponentPropsWithRef<'div'> {
    cardPromise: Promise<IArtItem[]>;
}

export default function Gallery({ cardPromise }: ArtCollection) {
    const cards: IArtItem[] = use(cardPromise);
    
    return (
        <>
            <div className={style.gallery}>
                {cards.map((i) => {
                    return <Card key={i.id} size='large' art={i} />;
                })}
            </div>
        </>
    );
}
