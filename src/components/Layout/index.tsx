import ErrorList from '@src/components/ErrorList';
import { useErrorContext } from '@src/hooks/useErrorContext';

import Footer from '@components/Footer';
import Header from '@components/Header';

import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

import style from './style.module.scss';

export const MenuContext = createContext({
    isModalOpen: false,
    toggleMenu: () => {},
});

export const ErrorContext = createContext({
    errors: [] as string[],
    setErrors: (message: string) => {},
});

export default function Layout() {
    const [isModalOpen, toggleMenu] = useState(false);
    const { errorContextValue } = useErrorContext();
    const { errors } = errorContextValue;

    return (
        <ErrorContext.Provider value={errorContextValue}>
            <MenuContext.Provider
                value={{
                    isModalOpen,
                    toggleMenu: () => toggleMenu((prev) => !prev),
                }}
            >
                {' '}
                <div className={style.layout}>
                    {errors.length ? <ErrorList errors={errors} /> : null}
                    <Header />
                    <Outlet />
                    <Footer />
                    {isModalOpen && <div className={style.modal}></div>}
                </div>
            </MenuContext.Provider>
        </ErrorContext.Provider>
    );
}
