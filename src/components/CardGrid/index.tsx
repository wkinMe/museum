import Card from '../Card';
import { ArtCollection } from '../Gallery';

import style from './style.module.scss';

export default function CardGrid({ items }: ArtCollection) {
    return (
        <div className={style.cardGrid}>
            {items.map((i) => {
                return <Card size='small' art={i} />;
            })}
        </div>
    );
}
