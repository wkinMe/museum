import style from './style.module.scss';

import Card from '../../components/Card';
import testImg from '../../assets/image 1.png';
import { IMG_COUNT } from '../../constants/constants';
import PaginationButtons from '../PaginationButtons';

export default function Gallery() {
    const items = new Array(IMG_COUNT).fill(null);

    return (
        <>
            <div className={style.gallery}>
                {items.map((i, ind) => {
                    return (
                        <Card
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
            <PaginationButtons onClick={(pageNumber) => pageNumber} />
        </>
    );
}
