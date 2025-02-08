import { MenuContext } from '@components/Layout';

import { useOnClickOutside } from '@hooks/useOnClickOutside';

import { useContext, useEffect, useRef } from 'react';

export const useBurgerMenu = () => {
    const { isModalOpen, toggleMenu } = useContext(MenuContext);
    const node = useRef<HTMLDivElement>(null);

    // Предотвращение прокрутки страницы при открытом меню
    useEffect(() => {
        const preventScroll = (e: Event) => {
            e.preventDefault();
        };

        if (isModalOpen) {
            window.addEventListener('wheel', preventScroll, { passive: false });
            window.addEventListener('touchmove', preventScroll, {
                passive: false,
            });
        } else {
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
        }

        return () => {
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
        };
    }, [isModalOpen]);

    // Закрытие меню при клике вне его области
    useOnClickOutside(node, () => {
        if (isModalOpen) {
            toggleMenu();
        }
    });

    // Обработка клика по кнопке бургер-меню
    const handleClick = () => {
        toggleMenu();
    };

    return { isModalOpen, node, handleClick };
};
