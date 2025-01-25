import style from './style.module.scss';

import Card from '../../components/Card';
import testImg from '../../assets/image 1.png';
import { IMG_COUNT } from '../../constants/constants';
import { useState } from 'react';

import arrow from '../../assets/arrow.svg';

export default function Gallery() {
    const [currentPage, setCurrentPage] = useState(1);

    const items = new Array(IMG_COUNT).fill(null);
    const pageSize = 3;
    const pages = new Array(Math.ceil(IMG_COUNT / pageSize)).fill(null);

    const handlePageClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentPage(Number(e.currentTarget.textContent));
    };

    const handlePrevButtonClick = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextButtonClick = () => {
        setCurrentPage(currentPage + 1);
    };

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
            <div className={style.paginationButtons}>
                {currentPage > 1 && (
                    <button
                        className={style.paginationButtonAddition}
                        onClick={handlePrevButtonClick}
                    >
                        <img
                            src={arrow}
                            style={{
                                transform: `rotate(180deg)`,
                            }}
                            alt='Prev'
                        />
                    </button>
                )}
                {pages.map((_, ind) => {
                    return (
                        <button
                            className={`${style.paginationButton} ${currentPage == ind + 1 ? style.active : ''}`}
                            onClick={handlePageClick}
                        >
                            {ind + 1}
                        </button>
                    );
                })}
                {currentPage < pages.length && (
                    <button
                        className={style.paginationButtonAddition}
                        onClick={handleNextButtonClick}
                    >
                        <img src={arrow} alt='Next' />
                    </button>
                )}
            </div>
        </>
    );
}
