import { useState } from 'react';
import style from './style.module.scss';
import { IMG_COUNT } from '../../constants/constants';

import arrow from '../../assets/arrow.svg';

interface PaginationButtonsProps {
    onClick: (pageNumber: number) => void;
}

export default function PaginationButtons({ onClick }: PaginationButtonsProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 3;
    const pages = new Array(Math.ceil(IMG_COUNT / pageSize)).fill(null);

    const handlePageClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick(currentPage);
        setCurrentPage(Number(e.currentTarget.textContent));
    };

    return (
        <div className={style.paginationButtons}>
            {currentPage > 1 && (
                <button
                    className={style.paginationButtonAddition}
                    onClick={() => setCurrentPage(currentPage - 1)}
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
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    <img src={arrow} alt='Next' />
                </button>
            )}
        </div>
    );
}
