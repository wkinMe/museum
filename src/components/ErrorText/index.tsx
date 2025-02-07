import style from './style.module.scss';

export default function ErrorText({ text }: { text: string }) {
    return (
        <div className={style.errorContainer}>
            <h1>{text}</h1>
        </div>
    );
}
