import testImg from '../../assets/image 1.png';
import MiniCard from '../MiniCard';

import style from './style.module.scss';

export default function CardGrid() {
    const items = new Array(9).fill(null);

    return (
        <div className={style.cardGrid}>
            {items.map((_, ind) => {
                return (
                    <MiniCard
                        img={testImg}
                        artName='Charles V, bust length seltiqinselfinqsflni'
                        artistName='Giovanni Britto'
                        isFavorite={ind % 2 == 0}
                        isPublic={true}
                        key={ind}
                    />
                );
            })}
        </div>
    );
}
