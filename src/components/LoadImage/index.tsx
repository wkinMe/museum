import { ComponentPropsWithoutRef, useState } from 'react';

import NotFoundImg from '../../assets/NotFoundImg.svg';
import Loader from '../Loader';

interface LoadImageProps extends ComponentPropsWithoutRef<'img'> {
    src: string;
    size: 'large' | 'small';
}

export default function LoadImage({ src, size, ...props }: LoadImageProps) {
    const [imageLoaded, setImagesLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);

    return (
        <>
            {!imageLoaded && <Loader size={size} />}
            <img
                onLoad={() => setImagesLoaded(true)}
                onError={() => {
                    setImagesLoaded(true);
                    setImgError(true);
                }}
                src={!imgError ? src : NotFoundImg}
                {...props}
            />
        </>
    );
}
