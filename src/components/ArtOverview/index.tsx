import ArtOverviewItem from '../ArtOverviewItem';
import style from './style.module.scss';

export default function ArtOverview({ ...props }) {
    const items = [
        {
            prop: 'Artist nationality',
            value: 'German',
        },
        {
            prop: 'Dimensions: Sheet',
            value: '19 3/8 × 13 11/16 in. (49.2 × 34.8 cm)',
        },
        {
            prop: 'Credit line',
            value: 'Rogers Fund, 1917',
        },
        {
            prop: 'Repository',
            value: 'Metropolitan Museum of Art, New York, NY',
        },
        {
            prop: '',
            value: 'Public',
        },
    ];

    return (
        <div className={style.artOverview} {...props}>
            <h3>Overview</h3>
            {items.map((i, ind) => (
                <ArtOverviewItem key={ind} prop={i.prop} value={i.value} />
            ))}
        </div>
    );
}
