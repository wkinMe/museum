import { ComponentPropsWithoutRef } from 'react';
import { ArtItem } from '../../constants/interfaces';
import ArtOverviewItem from '../ArtOverviewItem';
import style from './style.module.scss';

interface ArtOverviewProps extends ComponentPropsWithoutRef<'div'> {
    artItem: ArtItem;
}

export default function ArtOverview({ artItem, ...props }: ArtOverviewProps) {
    return (
        <div className={style.artOverview} {...props}>
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
