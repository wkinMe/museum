import { BASE_URL } from '../constants/constants';
import { ArtItem, ArtItemResponse } from '../constants/interfaces';

export async function getArtById(id: number) {
    const response = await fetch(
        `${BASE_URL}/${id}?fields=id,title,date_start,date_end,artist_title,artist_display,is_public_domain,credit_line,dimensions,image_id`,
    );

    const data = await response.json().then((res) => res.data);
    const art = makeData(data);

    function makeData(data: ArtItemResponse): ArtItem {
        const match = data.artist_display.match(/(?<=\n|\\\()\s*([^,\n]+)/);
        const nationality = match ? match[1].trim() : 'Unknown';
        const imageURL = `https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`;
        return {
            ...data,
            artist_nationality: nationality,
            image_url: imageURL,
        };
    }

    return art;
}
