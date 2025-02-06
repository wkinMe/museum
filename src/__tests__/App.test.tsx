import '@testing-library/jest-dom/vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import { describe } from 'node:test';
import { MemoryRouter } from 'react-router-dom';
import { expect, test } from 'vitest';

import App from '../pages/App/App';

describe('App', () => {
    test('renders Loader while CardGrid is loading', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>,
        );

        screen.debug();
    });
});
