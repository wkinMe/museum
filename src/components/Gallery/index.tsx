import style from './style.module.scss';

import Card from '../../components/Card';
import { ArtItem } from '../../constants/interfaces';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { ComponentPropsWithRef, use } from 'react';

export interface ArtCollection extends ComponentPropsWithRef<'div'> {
    cardPromise: Promise<ArtItem[]>;
}

export default function Gallery({ cardPromise, ...props }: ArtCollection) {
    const cards = use(cardPromise);

    return (
        <>
            <div className={style.gallery} {...props}>
                {cards.map((i: ArtItem) => {
                    return <Card size='large' art={i} />;
                })}
            </div>
        </>
    );
}
