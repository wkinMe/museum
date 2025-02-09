import Home from '@pages/Home';

import { render, screen, act, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test, vi } from 'vitest';

vi.mock('@hooks/useGetArtsFromQuery', () => ({
    useGetArtsFromQuery: () => () =>
        Promise.resolve([
            {
                id: 1,
                title: 'Art 1',
                artist_title: 'Artist 1',
                is_public_domain: true,
                image_url: 'url1',
            },
            {
                id: 2,
                title: 'Art 2',
                artist_title: 'Artist 2',
                is_public_domain: false,
                image_url: 'url2',
            },
        ]),
}));

describe('Home Component', () => {
    test('Loaders work test', async () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>,
        );

        expect(screen.getAllByTestId('loader').length).toBe(2);
    });

    test('CardGrid renders after loading', async () => {
        await act(async () => {
            render(
                <MemoryRouter>
                    <Home />
                </MemoryRouter>,
            );
        });

        const cardGrid = await screen.findByTestId('cardGrid');
        expect(cardGrid).toBeInTheDocument();

        expect(await within(cardGrid).findByText('Art 1')).toBeInTheDocument();
        expect(
            await within(cardGrid).findByText('Artist 1'),
        ).toBeInTheDocument();
        expect(await within(cardGrid).findByText('Art 2')).toBeInTheDocument();
        expect(
            await within(cardGrid).findByText('Artist 2'),
        ).toBeInTheDocument();
    });

    test('Gallery renders after loading', async () => {
        const gallery = await screen.findByTestId('gallery');
        expect(gallery).toBeInTheDocument();

        expect(await within(gallery).findByText('Art 1')).toBeInTheDocument();
        expect(
            await within(gallery).findByText('Artist 1'),
        ).toBeInTheDocument();
        expect(await within(gallery).findByText('Art 2')).toBeInTheDocument();
        expect(
            await within(gallery).findByText('Artist 2'),
        ).toBeInTheDocument();
    });
});
