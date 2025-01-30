import style from './style.module.scss';

import { ComponentPropsWithRef, use } from 'react';
import { ArtItem } from '../../constants/interfaces';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
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
                    return <Card size='large' art={i} />;
                })}
            </div>
        </>
    );
}
