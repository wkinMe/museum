import { useEffect, useRef } from 'react';

export const useResize = () => {
    const width = useRef(window.innerWidth);

    const handleResize = () => {
        width.current = window.innerWidth;
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width.current;
};
