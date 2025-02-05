
import ArtOverviewItem from '@components/ArtOverviewItem';
import { IArtItem } from '../../types/IArtItem';
import style from './style.module.scss';

interface ArtOverviewProps {
    artItem: IArtItem;
}

export default function ArtOverview({ artItem }: ArtOverviewProps) {
    return (
        <div className={style.artOverview}>
            <h3>Overview</h3>
            <ArtOverviewItem
                prop='Artist nationality'
                value={artItem.artist_nationality}
            />
            <ArtOverviewItem
                prop='Dimensions Sheet'
                value={artItem.dimensions}
            />
            <ArtOverviewItem prop='Credit line' value={artItem.credit_line} />
            <ArtOverviewItem
                prop=''
                value={artItem.is_public_domain ? 'Public' : 'Not public'}
            />
        </div>
    );
}
