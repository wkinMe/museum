import { IArtItemResponse } from './IArtItemResponse';

export interface IArtItem
    extends Omit<IArtItemResponse, 'artist_display' | 'image_id'> {
    artist_nationality: string;
    image_url: string;
}
