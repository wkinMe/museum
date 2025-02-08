import { GALLERY_SIZES } from '@constants/constants';

import { useResize } from '@hooks/useResize';

import { useState, useEffect } from 'react';

export const useGallerySize = () => {
    const width = useResize();
    const [imgCount, setImgCount] = useState(GALLERY_SIZES.LARGE);

    useEffect(() => {
        if (width > 815) {
            setImgCount(GALLERY_SIZES.LARGE);
        } else if (width < 815 && width > 550) {
            setImgCount(GALLERY_SIZES.MEDIUM);
        } else if (width < 550) {
            setImgCount(GALLERY_SIZES.SMALL);
        }
    }, [width]);

    return imgCount;
};
