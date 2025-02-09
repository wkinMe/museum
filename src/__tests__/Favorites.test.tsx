import { favoriteHelper } from '@src/helpers/FavoriteHelper';
import { IArtItem } from '@src/types/IArtItem';

import Favorite from '@pages/Favorite';

import { act, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('@api/getArtById', () => ({
    getArtById: vi.fn((id: number) => {
        const mockFavorites: IArtItem[] = [
            {
                id: 1,
                title: 'Art 1',
                artist_title: 'Mock Artist',
                date_start: 1,
                date_end: 3,
                image_url: 'https://example.com/image.jpg',
                artist_nationality: 'American',
                is_public_domain: true,
                credit_line: 'Credit Line 1',
                dimensions: '30x40',
            },
            {
                id: 2,
                title: 'Art 2',
                artist_title: 'Mock Artist',
                date_start: 2,
                date_end: 2,
                image_url: 'https://example.com/image.jpg',
                artist_nationality: 'American',
                is_public_domain: true,
                credit_line: 'Credit Line 1',
                dimensions: '30x40',
            },
            {
                id: 3,
                title: 'Art 3',
                artist_title: 'Mock Artist',
                date_start: 3,
                date_end: 1,
                image_url: 'https://example.com/image.jpg',
                artist_nationality: 'American',
                is_public_domain: true,
                credit_line: 'Credit Line 1',
                dimensions: '30x40',
            },
        ];
        return Promise.resolve(mockFavorites.find((item) => item.id === id));
    }),
}));

describe('Favorite Component', () => {
    beforeEach(() => {
        sessionStorage.clear();
        [1, 2, 3].forEach((id) => favoriteHelper.addToFavorites({ id }));
    });

    it('renders loader while loading favorites', async () => {
        render(<Favorite />);
        expect(screen.getByTestId('loader')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
        });
    });

    it('renders favorites list after loading', async () => {
        await act(async () => {
            render(
                <MemoryRouter>
                    <Favorite />
                </MemoryRouter>,
            );
        });

        await waitFor(() => {
            expect(screen.getByText('Art 1')).toBeInTheDocument();
            expect(screen.getByText('Art 2')).toBeInTheDocument();
            expect(screen.getByText('Art 3')).toBeInTheDocument();
        });
    });

    it('renders "no favorites" message if favorites list is empty', async () => {
        favoriteHelper.clearFavorites();

        render(<Favorite />);

        await waitFor(() => {
            expect(
                screen.getByText("You haven't added to favorites yet"),
            ).toBeInTheDocument();
        });
    });
});
