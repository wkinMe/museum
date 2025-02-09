import { PUBLIC_DOMAIN } from '@src/constants/constants';

import ArtOverviewItem from '@components/ArtOverviewItem';

import style from './style.module.scss';

interface ArtOverviewProps {
    artist_nationality: string;
    dimensions: string;
    credit_line: string;
    is_public_domain: boolean;
}

export default function ArtOverview({
    artist_nationality,
    dimensions,
    credit_line,
    is_public_domain,
}: ArtOverviewProps) {
    return (
        <div className={style.artOverview}>
            <h3>Overview</h3>
            <ArtOverviewItem
                prop='Artist nationality'
                value={artist_nationality}
            />
            <ArtOverviewItem prop='Dimensions Sheet' value={dimensions} />
            <ArtOverviewItem prop='Credit line' value={credit_line} />
            <ArtOverviewItem
                prop=''
                value={
                    is_public_domain
                        ? PUBLIC_DOMAIN.PUBLIC
                        : PUBLIC_DOMAIN.PRIVATE
                }
            />
        </div>
    );
}
