import style from './style.module.scss';

import testImg from '../../assets/image 1.png';
import FavoriteButton from '../../components/FavoriteButton';
import ArtOverview from '../../components/ArtOverview';

// interface DeatilsProps {
//     artName: string;
//     artistName: string;
//     artYears: string;
// }

export default function Details() {
    const test = {
        artName: 'Charles V, bust length, holding a sword, facing right',
        artistName: 'Giovanni Britto',
        artYears: '1535–45',
    };
    return (
        <div className={style.container}>
            <div className={style.details}>
                <div className={style.detailsImg}>
                    <img src={testImg} alt='' />
                    <FavoriteButton isFavorite={false} />
                </div>
                <div className={style.detailsInfo}>
                    <span className={style.artName}>{test.artName}</span>
                    <span className={style.artistName}>{test.artistName}</span>
                    <span className={style.artYears}>{test.artYears}</span>
                    <ArtOverview style={{ alignSelf: 'flex-end' }} />
                </div>
            </div>
        </div>
    );
}
