import { getArtById } from '@src/api/getArtById';
import { favoriteHelper } from '@src/helpers/FavoriteHelper';
import { IArtItem } from '@src/types/IArtItem';

import Details from '@pages/Details';

import { act, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeAll, describe, expect, test, vi } from 'vitest';

vi.mock('@api/getArtById', () => ({
    getArtById: vi.fn(),
}));

describe('Details Component', () => {
    const mockArt: IArtItem = {
        id: 1,
        title: 'Mock Art Title',
        artist_title: 'Mock Artist',
        date_start: 1900,
        date_end: 1950,
        image_url: 'https://example.com/image.jpg',
        artist_nationality: 'American',
        is_public_domain: true,
        credit_line: 'Credit Line 1',
        dimensions: '30x40',
    };

    beforeAll(() => {
        vi.mocked(getArtById).mockResolvedValue(mockArt);
    });

    test('renders art details after loading', async () => {
        await act(async () => {
            render(
                <MemoryRouter initialEntries={['/details/1']}>
                    <Routes>
                        <Route path='/details/:id' element={<Details />} />
                    </Routes>
                </MemoryRouter>,
            );
        });

        expect(screen.getByTestId('loader')).toBeInTheDocument();

        await waitFor(() => screen.getByText(mockArt.title));

        expect(screen.getByText(mockArt.title)).toBeInTheDocument();
        expect(screen.getByText(mockArt.artist_title)).toBeInTheDocument();
        expect(screen.getByText('1900-1950')).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute(
            'src',
            mockArt.image_url,
        );

        expect(screen.getByTestId('favoriteBtn')).toBeInTheDocument();
    });

    test('handles favorite button click', async () => {
        await waitFor(() => screen.getByText(mockArt.title));

        const favoriteButton = screen.getByTestId('favoriteBtn');

        expect(favoriteHelper.isFavorite({ id: mockArt.id })).toBe(false);
        favoriteButton.click();
        expect(favoriteHelper.isFavorite({ id: mockArt.id })).toBe(true);
    });
});
