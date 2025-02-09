import { CARDS_SIZES } from '@src/constants/constants';
import { favoriteHelper } from '@src/helpers/FavoriteHelper';
import { IArtItem } from '@src/types/IArtItem';

import ArtOverview from '@components/ArtOverview';
import FavoriteButton from '@components/FavoriteButton';
import LoadImage from '@components/LoadImage';
import Loader from '@components/Loader';

import { getArtYears } from '@utils/getArtYears';

import { getArtById } from '@api/getArtById';

import { Suspense, use, useState } from 'react';
import { useParams } from 'react-router-dom';

import style from './style.module.scss';

export default function DetailsWrapper() {
    const { id } = useParams() as { id: string };

    return (
        <div className={style.container}>
            <Suspense fallback={<Loader size={CARDS_SIZES.LARGE} />}>
                <Details promise={getArtById(Number(id))} />
            </Suspense>
        </div>
    );
}

function Details({ promise }: { promise: Promise<IArtItem> }) {
    const art: IArtItem = use(promise);
    const { id, title, artist_title, date_start, date_end, image_url } = art;
    const [isFavorite, setIsFavorite] = useState(
        favoriteHelper.isFavorite(art),
    );

    return (
        <section className={style.details}>
            <div className={style.detailsImg}>
                <LoadImage src={image_url} size={CARDS_SIZES.LARGE} />
                <FavoriteButton
                    onClick={() => setIsFavorite(!isFavorite)}
                    artId={id}
                    isFavorite={isFavorite}
                    isUp={true}
                />
            </div>
            <div className={style.detailsInfo}>
                <span className={style.artName}>{title}</span>
                <span className={style.artistName}>{artist_title}</span>
                <span className={style.artYears}>
                    {getArtYears(date_start, date_end)}
                </span>
                <ArtOverview {...art} />
            </div>
        </section>
    );
}
