import arrow from '@assets/arrow.svg';

import style from './style.module.scss';

interface PaginationSideButtonProps {
    prev: boolean;
    onClick: () => void;
    isShow: boolean;
}

export default function PaginationSideButton({
    prev,
    onClick,
    isShow,
}: PaginationSideButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`${prev && style.rotated} ${isShow ? style.visible : style.hidden}`}
        >
            <img src={arrow} alt={prev ? 'Prev' : 'Next'} />
        </button>
    );
}
