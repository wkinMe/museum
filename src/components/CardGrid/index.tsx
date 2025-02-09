import { IArtItem } from '@src/types/IArtItem';

import { use } from 'react';

import Card from '@components/Card';
import style from './style.module.scss';
import { CARDS_SIZES } from '@src/constants/constants';

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
            {cards.map(
                ({ id, artist_title, is_public_domain, image_url, title }) => (
                    <Card
                        key={id}
                        size={CARDS_SIZES.SMALL}
                        id={id}
                        artist_title={artist_title}
                        is_public_domain={is_public_domain}
                        image_url={image_url}
                        title={title}
                    />
                ),
            )}
        </div>
    );
}
