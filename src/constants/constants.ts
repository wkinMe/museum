export const BASE_URL = 'https://api.artic.edu/api/v1/artworks';
export const FIELDS = `fields=id,title,date_start,date_end,artist_title,artist_display,is_public_domain,credit_line,dimensions,image_id`;

export const ARTS_IN_GALLERY = 10;

export enum GALLERY_SIZES {
    EMPTY,
    SMALL,
    MEDIUM,
    LARGE,
}

export const ARTS_IN_HOME_CARD_GRID = 12;

export const URLS = ['/', '/favorite', '/details/:id'];
