import ErrorComponent from '@components/ErrorComponent';

import style from './style.module.scss';

interface ErrorListProps {
    errors: string[];
}

export default function ErrorList({ errors }: ErrorListProps) {
    return (
        <ul className={style.errorList}>
            {errors.map((i, ind) => (
                <ErrorComponent key={ind} text={i} />
            ))}
        </ul>
    );
}
