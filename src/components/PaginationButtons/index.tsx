import { useState } from 'react';
import style from './style.module.scss';

import arrow from '../../assets/arrow.svg';

interface PaginationButtonsProps {
    pageCount: number;
    onClick: (page: number) => void;
}

export default function PaginationButtons({
    pageCount,
    onClick,
}: PaginationButtonsProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [prevPage, setPrevPage] = useState(currentPage);
    if (prevPage !== currentPage) {
        onClick(currentPage);
        setPrevPage(currentPage);
    }

    if (currentPage !== prevPage) {
        setPrevPage(currentPage);
        setCurrentPage(currentPage);
    }

    const pages = new Array(Math.ceil(pageCount)).fill(null);

    const handlePageClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCurrentPage(Number(e.currentTarget.textContent));
    };

    return (
        <div className={style.pagination}>
            <div className={style.paginationButtons}>
                {currentPage > 1 && (
                    <button
                        className={style.paginationButtonAddition}
                        onClick={() => {
                            setCurrentPage(currentPage - 1);
                        }}
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
                            key={ind}
                        >
                            {ind + 1}
                        </button>
                    );
                })}
                {currentPage < pages.length && (
                    <button
                        className={style.paginationButtonAddition}
                        onClick={() => {
                            setCurrentPage(currentPage + 1);
                        }}
                    >
                        <img src={arrow} alt='Next' />
                    </button>
                )}
            </div>
        </div>
    );
}
