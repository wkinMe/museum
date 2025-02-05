import { useContext, useEffect, useRef } from 'react';
import style from './style.module.scss';
import NavLinks from '../NavLinks';
import { MenuContext } from '../Layout';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

export default function BurgerMenu() {
    const { isModalOpen, toggleMenu } = useContext(MenuContext);
    const node = useRef<HTMLDivElement>(null);

    // Функция для блокировки скролла
    const preventScroll = (e: Event) => {
        e.preventDefault();
    };

    // Добавляем или удаляем обработчики событий в зависимости от состояния меню
    useEffect(() => {
        if (isModalOpen) {
            // Блокируем скролл
            window.addEventListener('wheel', preventScroll, { passive: false });
            window.addEventListener('touchmove', preventScroll, {
                passive: false,
            });
        } else {
            // Разблокируем скролл
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
        }

        // Очистка при размонтировании компонента
        return () => {
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
        };
    }, [isModalOpen]);

    useOnClickOutside(node, () => {
        if (isModalOpen) {
            toggleMenu();
        }
    });

    const handleClick = () => {
        toggleMenu();
    };

    return (
        <div className={style.burger} ref={node}>
            <div
                className={`${style.button} ${isModalOpen ? style.active : ''}`}
                onClick={handleClick}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <NavLinks
                isBurger={true}
                isOpen={isModalOpen}
                onClick={handleClick}
            />
        </div>
    );
}
