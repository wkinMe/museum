import { CARDS_SIZES } from '@src/constants/constants';
import style from './style.module.scss';

interface LoaderProps {
    size: CARDS_SIZES;
}

export default function Loader({ size }: LoaderProps) {
    return (
        <div
            className={`${style.spinner} ${size == CARDS_SIZES.LARGE ? style.large : style.small}`}
            data-testid='loader'
        ></div>
    );
}
