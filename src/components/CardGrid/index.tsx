import testImg from '../../assets/image 1.png';
import { ArtBriefDataCollection } from '../../constants/interfaces';
import MiniCard from '../MiniCard';

import style from './style.module.scss';

export default function CardGrid({ items }: ArtBriefDataCollection) {
    return (
        <div className={style.cardGrid}>
            {items.map((i) => {
                return (
                    <MiniCard
                        id={i.id}
                        img={testImg}
                        artName={i.title}
                        artistName={i.artist_title}
                        isFavorite={true}
                        isPublic={i.is_public_domain}
                        key={i.id}
                    />
                );
            })}
        </div>
    );
}
