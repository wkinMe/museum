import style from './style.module.scss';

import Card from '../../components/Card';
import testImg from '../../assets/image 1.png';
import PaginationButtons from '../PaginationButtons';
import { ArtItem } from '../../utils/getRandomArts';

interface GalleryProps {
    items: ArtItem[];
}

export default function Gallery({ items }: GalleryProps) {
    return (
        <>
            <div className={style.gallery}>
                {items.map((i, ind) => {
                    return (
                        <Card
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
            <PaginationButtons onClick={(pageNumber) => pageNumber} />
        </>
    );
}
