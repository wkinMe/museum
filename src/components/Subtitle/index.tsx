import style from './style.module.scss';

interface SubtitleProps {
    title: string;
    subtitle: string;
}

export default function Subtitle({ title, subtitle }: SubtitleProps) {
    return (
        <div className={style.subtitle}>
            <h5>{subtitle}</h5>
            <h2>{title}</h2>
        </div>
    );
}
