import PaginationSideButton from '@src/components/PaginationSideButton';
import { usePaginationButtons } from '@src/hooks/usePaginationButtons';

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

    if (pageCount < 2) {
        return null;
    }

    return (
        <div className={style.pagination}>
            <div className={style.paginationButtons}>
                <PaginationSideButton
                    prev={true}
                    onClick={() => handleSideBtn(-1)}
                    isShow={page > 1}
                />
                {pages.map((_, ind) => (
                    <button
                        className={`${style.paginationButton} ${page === ind + 1 ? style.active : ''}`}
                        onClick={() => handlePageClick(ind + 1)}
                        key={ind}
                    >
                        {ind + 1}
                    </button>
                ))}
                <PaginationSideButton
                    prev={false}
                    onClick={() => handleSideBtn(1)}
                    isShow={page < pages.length}
                />
            </div>
        </div>
    );
}
