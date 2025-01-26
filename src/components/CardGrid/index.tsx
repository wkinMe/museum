import testImg from '../../assets/image 1.png';
import { ArtItem } from '../../utils/getRandomArts';
import MiniCard from '../MiniCard';

import style from './style.module.scss';

interface CardGridSubtitleProps {
    items: ArtItem[];
}

export default function CardGrid({ items }: CardGridSubtitleProps) {
    return (
        <div className={style.cardGrid}>
            {items.map((i, ind) => {
                return (
                    <MiniCard
                        img={testImg}
                        artName={i.title}
                        artistName={i.artist_title}
                        isFavorite={ind % 2 == 0}
                        isPublic={i.is_public_domain}
                        key={ind}
                    />
                );
            })}
        </div>
    );
}
