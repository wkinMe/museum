import style from './style.module.scss';

interface TitleProps {
    children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
    return <div className={style.title}>{children}</div>;
}
