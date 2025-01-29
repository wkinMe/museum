import { useContext, useRef, useState, RefObject } from 'react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';
import NavLinks from '../NavLinks';
import { MenuContext } from '../Layout';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

export default function BurgerMenu() {
    const { isModalOpen, toggleMenu } = useContext(MenuContext);

    const node = useRef<HTMLDivElement>(null);

    useOnClickOutside(node, () => {
        console.log('o');

        if (isModalOpen) {
            toggleMenu();
        }
    });

    return (
        <div className={style.burger} ref={node}>
            <div
                className={`${style.button} ${isModalOpen ? style.active : ''}`}
                onClick={() => {
                    toggleMenu();
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <NavLinks isBurger={true} isOpen={isModalOpen} />
        </div>
    );
}
