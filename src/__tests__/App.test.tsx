import App from '@pages/App/App';

import { screen, render } from '@testing-library/react';
import { describe } from 'node:test';
import { MemoryRouter } from 'react-router-dom';
import { expect, test } from 'vitest';

describe('App', () => {
    test('App component render', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>,
        );

        const welcomeText = await screen.findByText(/let's find some/i);
        expect(welcomeText).toBeInTheDocument();
    });
});
