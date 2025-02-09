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
export const BURGER_MENU_APPEAR_WIDTH = 820;

export const SORTING_FAVORITE_TYPES = {
    ALPHABET: 'Alphabet',
    START_DATE: 'Start date',
    END_DATE: 'End date',
};

export enum CARDS_SIZES {
    LARGE,
    SMALL,
}

export const PUBLIC_DOMAIN = {
    PUBLIC: 'Public',
    PRIVATE: 'Private',
};

export const urls = {
    home: '/',
    favorite: 'favorite',
    notFound: '*',
    details: (id: number | null) => `details/${id ? id : ':id'}`,
};

export const RANDOM_HOME_CARD_GRID_PAGE = 52;
