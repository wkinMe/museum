import { ComponentProps } from 'react';
import style from './style.module.scss';

interface LoaderProps extends ComponentProps<'div'> {
    size: 'large' | 'small';
}

export default function Loader({ size, ...props }: LoaderProps) {
    return (
        <div
            className={`${style.spinner} ${size == 'large' ? style.large : style.small}`}
            {...props}
        ></div>
    );
}
