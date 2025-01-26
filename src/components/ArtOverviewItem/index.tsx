import style from './style.module.scss';

interface ArtOverviewItemProps {
    prop: string;
    value: string;
}

export default function ArtOverviewItem({ prop, value }: ArtOverviewItemProps) {
    return (
        <div className={style.artOverviewItem}>
            <span className={style.prop}>{prop && `${prop}: `}</span>
            <span className={style.value}>{value}</span>
        </div>
    );
}
