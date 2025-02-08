import NavLinks from '@components/NavLinks';

import { useBurgerMenu } from '@hooks/useBurgerMenu';

import style from './style.module.scss';

export default function BurgerMenu() {
    const { isModalOpen, node, handleClick } = useBurgerMenu();

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
