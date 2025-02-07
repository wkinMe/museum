import arrow from '@assets/arrow.svg';

import { useState } from 'react';

import style from './style.module.scss';

interface PaginationButtonsProps {
    onClick: (page: number) => void;
    pageCount: number;
}

export default function PaginationButtons({
    onClick,
    pageCount,
}: PaginationButtonsProps) {
    const [page, setPage] = useState(1);
    const [prevPage, setPrevPage] = useState(page);

    if (prevPage !== page) {
        onClick(page);
        setPrevPage(page);
    }

    const pages = new Array(pageCount).fill(null);

    const handlePageClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setPage(Number(e.currentTarget.textContent));
    };

    const handleSideBtn = (inc: boolean) => {
        let count = inc ? 1 : -1;
        setPage((prev) => prev + count);
    };

    return (
        pageCount > 1 && (
            <div className={style.pagination}>
                <div className={style.paginationButtons}>
                    {page > 1 && (
                        <button
                            className={style.paginationButtonAddition}
                            onClick={() => handleSideBtn(true)}
                        >
                            <img
                                src={arrow}
                                className={style.rotated}
                                alt='Prev'
                            />
                        </button>
                    )}
                    {pages.map((_, ind) => {
                        return (
                            <button
                                className={`${style.paginationButton} ${page == ind + 1 ? style.active : ''}`}
                                onClick={handlePageClick}
                                key={ind}
                            >
                                {ind + 1}
                            </button>
                        );
                    })}
                    {page < pages.length && (
                        <button
                            className={style.paginationButtonAddition}
                            onClick={() => handleSideBtn(false)}
                        >
                            <img src={arrow} alt='Next' />
                        </button>
                    )}
                </div>
            </div>
        )
    );
}
