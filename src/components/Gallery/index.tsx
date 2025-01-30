import style from './style.module.scss';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import { ComponentPropsWithRef, use } from 'react';

import Card from '../Card';
import { ArtItem } from '../../constants/interfaces';

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
