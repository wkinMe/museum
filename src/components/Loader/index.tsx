import style from './style.module.scss';

interface LoaderProps {
    size: 'large' | 'small';
}

export default function Loader({ size }: LoaderProps) {
    return (
        <div
            className={`${style.spinner} ${size == 'large' ? style.large : style.small}`}
            data-testid='loader'
        ></div>
    );
}
