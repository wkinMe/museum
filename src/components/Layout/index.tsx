import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import { createContext, useState } from 'react';

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
                toggleMenu: () => toggleMenu(!isModalOpen),
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
