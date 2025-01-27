import style from './style.module.scss';

import Card from '../../components/Card';
import { ArtItem } from '../../constants/interfaces';

export interface ArtCollection {
    items: ArtItem[];
}

export default function Gallery({ items }: ArtCollection) {
    return (
        <>
            <div className={style.gallery}>
                {items.map((i) => {
                    return <Card size='large' art={i} />;
                })}
            </div>
        </>
    );
}
