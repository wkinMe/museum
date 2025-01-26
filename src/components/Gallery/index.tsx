import style from './style.module.scss';

import Card from '../../components/Card';
import PaginationButtons from '../PaginationButtons';
import { ArtBriefDataCollection } from '../../constants/interfaces';

export default function Gallery({ items }: ArtBriefDataCollection) {
    return (
        <>
            <div className={style.gallery}>
                {items.map((i) => {
                    return (
                        <Card
                            id={i.id}
                            img={i.image_url}
                            artName={i.title}
                            artistName={i.artist_title}
                            isFavorite={false}
                            isPublic={i.is_public_domain}
                            key={i.id}
                        />
                    );
                })}
            </div>
            <PaginationButtons onClick={(pageNumber) => pageNumber} />
        </>
    );
}
