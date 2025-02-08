import App from '@pages/App/App';
import Home from '@pages/Home';

import '@testing-library/jest-dom/vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import { describe } from 'node:test';
import { MemoryRouter } from 'react-router-dom';
import { expect, test } from 'vitest';

describe('App', () => {
    test('renders Loader while CardGrid is loading', async () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>,
        );
    });
});
