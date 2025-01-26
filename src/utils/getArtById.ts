import { BASE_URL } from '../constants/constants';
import { ArtItemResponse } from '../constants/interfaces';
import { ArtItem } from '../constants/interfaces';

export async function getArtById(id: number) {
    const response = await fetch(
        `${BASE_URL}/${id}?fields=id,title,date_start,date_end,artist_title,artist_display,is_public_domain,credit_line,dimensions`,
    );

    const data = await response.json().then((res) => res.data);
    const art = makeData(data);

    function makeData(data: ArtItemResponse): ArtItem {
        const match = data.artist_display.match(/(?<=\n|\\\()\s*([^,\n]+)/);
        const nationality = match ? match[1].trim() : 'Unknown';
        return { ...data, artist_nationality: nationality };
    }

    return art;
}
