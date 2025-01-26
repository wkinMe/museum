export interface ArtItem {
    id: number;
    title: string;
    date_start: number;
    date_end: number;
    artist_title: string;
    is_public_domain: boolean;
    credit_line: string;
    artist_nationality: string;
    dimensions: string;
}

export interface BriefArtItemData {
    id: number;
    title: string;
    artist_title: string;
    is_public_domain: boolean;
}

export interface ArtItemResponse extends BriefArtItemData {
    date_start: number;
    date_end: number;
    credit_line: string;
    artist_display: string;
    dimensions: string;
}

export interface ArtBriefDataCollection {
    items: BriefArtItemData[];
}
