import { useContext, useEffect, useRef } from 'react';
import style from './style.module.scss';
import { MenuContext } from '@components/Layout';
import { useOnClickOutside } from '@hooks/useOnClickOutside';
import NavLinks from '@components/NavLinks';

export default function BurgerMenu() {
    const { isModalOpen, toggleMenu } = useContext(MenuContext);
    const node = useRef<HTMLDivElement>(null);

    const preventScroll = (e: Event) => {
        e.preventDefault();
    };

    useEffect(() => {
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

    useOnClickOutside(node, () => {
        if (isModalOpen) {
            toggleMenu();
        }
    });

    const handleClick = () => {
        toggleMenu();
    };

    return (
        <aside className={style.burger} ref={node}>
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
        </aside>
    );
}
