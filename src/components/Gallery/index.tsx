import style from './style.module.scss';

import { ComponentPropsWithRef, use } from 'react';
import { ArtItem } from '../../constants/interfaces';
import Card from '../Card';

export interface ArtCollection extends ComponentPropsWithRef<'div'> {
    cardPromise: Promise<ArtItem[]>;
}

export default function Gallery({ cardPromise, ...props }: ArtCollection) {
    const cards: ArtItem[] = use(cardPromise);

    return (
        <>
            <div className={style.gallery} {...props}>
                {cards.map((i) => {
                    return <Card key={i.id} size='large' art={i} />;
                })}
            </div>
        </>
    );
}
