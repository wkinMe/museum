import style from './style.module.scss';

import FavoriteButton from '../../components/FavoriteButton';
import ArtOverview from '../../components/ArtOverview';
import { useParams } from 'react-router-dom';
import { getArtById } from '../../utils/getArtById';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import { useState, use, Suspense } from 'react';
import { ArtItem } from '../../constants/interfaces';
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

function Details({ promise }: { promise: Promise<ArtItem> }) {
    const art: ArtItem = use(promise);
    const [isFavorite, setIsFavorite] = useState(checkIsFavorite(art));

    return (
        <div className={style.container}>
            <div className={style.details}>
                <div className={style.detailsImg}>
                    <LoadImage src={art.image_url} size={'large'} />
                    <FavoriteButton
                        style={{
                            position: 'absolute',
                            top: '16px',
                            right: '16px',
                        }}
                        onClick={() => setIsFavorite(!isFavorite)}
                        art={art}
                        isFavorite={isFavorite}
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
                        style={{ alignSelf: 'flex-end' }}
                    />
                </div>
            </div>
        </div>
    );
}
