import { IArtItem } from '@src/types/IArtItem';
import {} from '../types/IArtItemResponse';

export function correctArtData(data: IArtItemResponse): IArtItem {
    const match = data.artist_display.match(/(?<=\n|\\\()\s*([^,\n]+)/);
    const nationality = match ? match[1].trim() : 'Unknown';
    const imageURL = `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`;

    return {
        ...data,
        artist_nationality: nationality,
        image_url: imageURL,
    };
}
