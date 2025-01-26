export interface ArtItem
    extends Omit<ArtItemResponse, 'artist_display' | 'image_id'> {
    artist_nationality: string;
    image_url: string;
}

export interface ArtItemResponse extends BaseArtItem {
    image_id: string;
}

interface BaseArtItem {
    id: number;
    title: string;
    artist_title: string;
    is_public_domain: boolean;
    date_start: number;
    date_end: number;
    credit_line: string;
    artist_display: string;
    dimensions: string;
}

export interface ArtBriefDataCollection {
    items: ArtItem[];
}
