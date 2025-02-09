import BurgerMenu from '@components/BurgerMenu';
import { MenuContext } from '@components/Layout';

import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, vi, beforeEach, test } from 'vitest';

vi.mock('@hooks/useOnClickOutside', () => ({
    useOnClickOutside: vi.fn((ref, callback) => {
        document.addEventListener('mousedown', (e) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                callback();
            }
        });
    }),
}));

const mockContext = {
    isModalOpen: false,
    toggleMenu: vi.fn(),
};

describe('BurgerMenu Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('renders BurgerMenu when isBurger is true', () => {
        render(
            <MemoryRouter>
                <MenuContext.Provider value={mockContext}>
                    <BurgerMenu />
                </MenuContext.Provider>
            </MemoryRouter>,
        );

        expect(screen.getByTestId('burgerButton')).toBeInTheDocument();
    });

    test('opens and closes the menu when the button is clicked', () => {
        const button = screen.getByTestId('burgerButton');

        fireEvent.click(button);
        expect(mockContext.toggleMenu).toHaveBeenCalledTimes(1);

        fireEvent.click(button);
        expect(mockContext.toggleMenu).toHaveBeenCalledTimes(2);
    });

    test('closes the menu when clicking outside', () => {
        const button = screen.getByTestId('burgerButton');

        fireEvent.click(button);
        fireEvent.mouseDown(document);
        expect(mockContext.toggleMenu).toHaveBeenCalledTimes(1);
    });
});
