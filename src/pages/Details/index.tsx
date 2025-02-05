import style from './style.module.scss';

import FavoriteButton from '../../components/FavoriteButton';
import ArtOverview from '../../components/ArtOverview';
import { useParams } from 'react-router-dom';
import { getArtById } from '../../api/getArtById';
import { useState, use, Suspense } from 'react';
import { IArtItem } from '../../types/IArtItem';
import { getArtYears } from '../../utils/getArtYears';
import { checkIsFavorite } from '../../utils/checkIsFavorite';
import Loader from '../../components/Loader';
import LoadImage from '../../components/LoadImage';

export default function DetailsWrapper() {
    const { id } = useParams() as { id: string };

    return (
        <Suspense fallback={<Loader size='large' />}>
            <Details promise={getArtById(Number(id))} />
        </Suspense>
    );
}

function Details({ promise }: { promise: Promise<IArtItem> }) {
    const art: IArtItem = use(promise);
    const [isFavorite, setIsFavorite] = useState(checkIsFavorite(art));

    return (
        <div className={style.container}>
            <div className={style.details}>
                <div className={style.detailsImg}>
                    <LoadImage src={art.image_url} size={'large'} />
                    <FavoriteButton
                        onClick={() => setIsFavorite(!isFavorite)}
                        art={art}
                        isFavorite={isFavorite}
                        isUp={true}
                    />
                </div>
                <div className={style.detailsInfo}>
                    <span className={style.artName}>{art.title}</span>
                    <span className={style.artistName}>{art.artist_title}</span>
                    <span className={style.artYears}>
                        {getArtYears(art.date_start, art.date_end)}
                    </span>
                    <ArtOverview
                        artItem={art}
                    />
                </div>
            </div>
        </div>
    );
}
