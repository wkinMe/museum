import NotFoundImg from '@assets/NotFoundImg.svg';

import Loader from '@components/Loader';

import { useState } from 'react';

interface LoadImageProps {
    src: string;
    size: 'large' | 'small';
}

export default function LoadImage({ src, size }: LoadImageProps) {
    const [imageLoaded, setImagesLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);
    
    const handleLoad = () => {
        setImagesLoaded(true);
    };

    const handleError = () => {
        setImagesLoaded(true);
        setImgError(true);
    };

    return (
        <>
            {!imageLoaded && <Loader size={size} />}
            <img
                onLoad={handleLoad}
                onError={handleError}
                src={!imgError ? src : NotFoundImg}
            />
        </>
    );
}
