import Loader from '@components/Loader';
import style from './style.module.scss';

import { useParams } from 'react-router-dom';
import { Suspense, use, useState } from 'react';
import { getArtById } from '@api/getArtById';
import { IArtItem } from '@src/types/IArtItem';
import { checkIsFavorite } from '@utils/checkIsFavorite';
import LoadImage from '@components/LoadImage';
import FavoriteButton from '@components/FavoriteButton';
import { getArtYears } from '@utils/getArtYears';
import ArtOverview from '@components/ArtOverview';


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
            <section className={style.details}>
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
            </section>
        </div>
    );
}
