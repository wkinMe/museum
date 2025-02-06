import { IArtItem } from '@src/types/IArtItem';

import Card from '@components/Card';

import { use } from 'react';

import style from './style.module.scss';

export interface ArtCollection {
    cardPromise: Promise<IArtItem[]>;
}

export default function Gallery({ cardPromise }: ArtCollection) {
    const cards: IArtItem[] = use(cardPromise);

    return (
        <div className={style.gallery}>
            {cards.map(
                ({ id, artist_title, is_public_domain, image_url, title }) => {
                    return (
                        <Card
                            key={id}
                            size='large'
                            id={id}
                            artist_title={artist_title}
                            is_public_domain={is_public_domain}
                            image_url={image_url}
                            title={title}
                        />
                    );
                },
            )}
        </div>
    );
}
