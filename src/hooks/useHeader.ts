import { MenuContext } from '@src/components/Layout';
import { BURGER_MENU_APPEAR_WIDTH } from '@src/constants/constants';

import { useResize } from '@hooks/useResize';

import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useHeader = () => {
    const width = useResize();
    const { isModalOpen, toggleMenu } = useContext(MenuContext);
    const { pathname } = useLocation();

    const isHome = pathname === '/';
    const isBurger = width < BURGER_MENU_APPEAR_WIDTH;

    useEffect(() => {
        if (isModalOpen && isBurger) {
            toggleMenu();
        }
    }, [isBurger]);

    return { isBurger, isHome };
};
