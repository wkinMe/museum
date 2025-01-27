import style from './style.module.scss';

import FavoriteButton from '../../components/FavoriteButton';
import ArtOverview from '../../components/ArtOverview';
import { useParams } from 'react-router-dom';
import { getArtById } from '../../utils/getArtById';
import { useEffect, useState } from 'react';
import { ArtItem } from '../../constants/interfaces';
import { getArtYears } from '../../utils/getArtYears';

export default function Details() {
    const { id } = useParams() as { id: string };
    const [art, setArt] = useState({} as ArtItem);

    useEffect(() => {
        (async function () {
            setArt(await getArtById(Number(id)));
        })();
    }, []);

    return (
        <div className={style.container}>
            <div className={style.details}>
                <div className={style.detailsImg}>
                    <img src={art.image_url} alt='' />
                    <FavoriteButton art={art} isFavorite={false} />
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
