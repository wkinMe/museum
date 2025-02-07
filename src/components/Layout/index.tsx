import Footer from '@components/Footer';
import Header from '@components/Header';

import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

import style from './style.module.scss';

export const MenuContext = createContext({
    isModalOpen: false,
    toggleMenu: () => {},
});

export default function Layout() {
    const [isModalOpen, toggleMenu] = useState(false);

    return (
        <MenuContext.Provider
            value={{
                isModalOpen,
                toggleMenu: () => toggleMenu((prev) => !prev),
            }}
        >
            {' '}
            <>
                <Header />
                <Outlet />
                <Footer />
                {isModalOpen && <div className={style.modal}></div>}
            </>
        </MenuContext.Provider>
    );
}
