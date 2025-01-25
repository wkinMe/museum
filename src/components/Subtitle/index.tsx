import './style.module.scss';

interface SubtitleProps {
    title: string;
    subtitle: string;
}

export default function Subtitle({ title, subtitle }: SubtitleProps) {
    return (
        <>
            <h5>{subtitle}</h5>
            <h2>{title}</h2>
        </>
    );
}
