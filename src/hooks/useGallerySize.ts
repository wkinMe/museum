import { GALLERY_SIZES } from '@constants/constants';

import { useResize } from '@hooks/useResize';

import { useState } from 'react';

export const useGallerySize = () => {
    const width = useResize();
    const [imgCount, setImgCount] = useState(GALLERY_SIZES.LARGE);

    if (width > 815 && imgCount != GALLERY_SIZES.LARGE) {
        setImgCount(GALLERY_SIZES.LARGE);
    } else if (width < 815 && width > 550 && imgCount != GALLERY_SIZES.MEDIUM) {
        setImgCount(GALLERY_SIZES.MEDIUM);
    } else if (width < 550 && imgCount != GALLERY_SIZES.SMALL) {
        setImgCount(GALLERY_SIZES.SMALL);
    }

    return imgCount;
};
