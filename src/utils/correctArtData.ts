import { IArtItem } from '@src/types/IArtItem';
import { IArtItemResponse } from '@src/types/IArtItemResponse';

export function correctArtData({
    artist_display,
    image_id,
    ...data
}: IArtItemResponse): IArtItem {
    const match = artist_display.match(/(?<=\n|\\\()\s*([^,\n]+)/);
    const nationality = match ? match[1].trim() : 'Unknown';
    const imageURL =
        image_id &&
        `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`;

    return {
        ...data,
        artist_nationality: nationality,
        image_url: imageURL,
    };
}
