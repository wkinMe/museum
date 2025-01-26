import Title from '../../components/Title';
import style from './style.module.scss';

import favoriteIcon from '../../assets/favorite.svg';
import Subtitle from '../../components/Subtitle';
import CardGrid from '../../components/CardGrid';

export default function Favorite() {
    return (
        <div className={style.container}>
            <Title>
                here are your
                <br />
                <img
                    style={{ width: '32px', height: '42px' }}
                    src={favoriteIcon}
                    alt=''
                />{' '}
                <span>favorite</span>
            </Title>
            <Subtitle title='Your favorite list' subtitle='Saved by you' />
            <CardGrid items={new Array(18).fill(null)} />
        </div>
    );
}
