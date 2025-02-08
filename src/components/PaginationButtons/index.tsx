import { usePaginationButtons } from '@src/hooks/usePaginationButtons';

import arrow from '@assets/arrow.svg';

import style from './style.module.scss';

interface PaginationButtonsProps {
    onClick: (page: number) => void;
    pageCount: number;
}

export default function PaginationButtons({
    onClick,
    pageCount,
}: PaginationButtonsProps) {
    const { page, pages, handlePageClick, handleSideBtn } =
        usePaginationButtons({ onPageChange: onClick, pageCount });

    return (
        <div className={style.pagination}>
            <div className={style.paginationButtons}>
                {page > 1 && (
                    <button
                        className={style.paginationButtonAddition}
                        onClick={() => handleSideBtn(-1)}
                    >
                        <img src={arrow} className={style.rotated} alt='Prev' />
                    </button>
                )}
                {pages.map((_, ind) => (
                    <button
                        className={`${style.paginationButton} ${page === ind + 1 ? style.active : ''}`}
                        onClick={() => handlePageClick(ind + 1)}
                        key={ind}
                    >
                        {ind + 1}
                    </button>
                ))}
                {page < pages.length && (
                    <button
                        className={style.paginationButtonAddition}
                        onClick={() => handleSideBtn(1)}
                    >
                        <img src={arrow} alt='Next' />
                    </button>
                )}
            </div>
        </div>
    );
}
