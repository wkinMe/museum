import ErrorList from '@src/components/ErrorList';

import Footer from '@components/Footer';
import Header from '@components/Header';

import { createContext, useCallback, useState, useMemo } from 'react';
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
    const [errors, setErrors] = useState<string[]>([]);

    const addError = useCallback(
        (message: string) => {
            if (!errors.includes(message)) {
                setErrors((prevErrors) => [...prevErrors, message]);
            }
        },
        [errors],
    );

    const errorContextValue = useMemo(
        () => ({
            errors,
            setErrors: addError,
        }),
        [errors, addError],
    );

    return (
        <ErrorContext.Provider value={errorContextValue}>
            <MenuContext.Provider
                value={{
                    isModalOpen,
                    toggleMenu: () => toggleMenu((prev) => !prev),
                }}
            >
                {' '}
                <>
                    {errors.length ? <ErrorList errors={errors} /> : null}
                    <Header />
                    <Outlet />
                    <Footer />
                    {isModalOpen && <div className={style.modal}></div>}
                </>
            </MenuContext.Provider>
        </ErrorContext.Provider>
    );
}
