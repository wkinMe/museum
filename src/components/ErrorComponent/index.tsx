import style from './style.module.scss';

interface ErrorComponentProps {
    text: string;
}

export default function ErrorComponent({ text }: ErrorComponentProps) {
    return (
        <div className={style.errorComponent}>
            <h3>{text}</h3>
        </div>
    );
}
