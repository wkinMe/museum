import { getArtById } from '@src/api/getArtById';
import { favoriteHelper } from '@src/helpers/FavoriteHelper';
import { IArtItem } from '@src/types/IArtItem';

// Для маршрутизации
import DetailsWrapper from '@pages/Details';

import { act, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeAll, describe, expect, test, vi } from 'vitest';

// Мокаем функцию getArtById
vi.mock('@api/getArtById', () => ({
    getArtById: vi.fn(),
}));

// Мокаем favoriteHelper
vi.mock('@src/helpers/FavoriteHelper', () => ({
    favoriteHelper: {
        isFavorite: vi.fn(),
    },
}));

describe('DetailsWrapper Component', () => {
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
        // Мокаем возвращаемое значение getArtById
        vi.mocked(getArtById).mockResolvedValue(mockArt);

        // Мокаем возвращаемое значение favoriteHelper.isFavorite
        vi.mocked(favoriteHelper.isFavorite).mockReturnValue(false);
    });

    test('renders art details after loading', async () => {
        await act(async () => {
            render(
                <MemoryRouter initialEntries={['/details/1']}>
                    <Routes>
                        <Route
                            path='/details/:id'
                            element={<DetailsWrapper />}
                        />
                    </Routes>
                </MemoryRouter>,
            );
        });

        // Проверяем, что отображается Loader во время загрузки
        expect(screen.getByTestId('loader')).toBeInTheDocument();

        // Ждем, пока данные загрузятся и компонент отрендерится
        await waitFor(() => screen.getByText(mockArt.title));

        // Проверяем, что данные отображаются корректно
        expect(screen.getByText(mockArt.title)).toBeInTheDocument();
        expect(screen.getByText(mockArt.artist_title)).toBeInTheDocument();
        expect(screen.getByText('1900-1950')).toBeInTheDocument(); // Проверка getArtYears
        expect(screen.getByRole('img')).toHaveAttribute(
            'src',
            mockArt.image_url,
        );

        // Проверяем, что кнопка избранного отображается
        expect(screen.getByTestId('favoriteBtn')).toBeInTheDocument();
    });

    // test('handles favorite button click', async () => {
    //     // Ждем, пока данные загрузятся
    //     await waitFor(() => screen.getByText(mockArt.title));

    //     // Находим кнопку избранного
    //     const favoriteButton = screen.getByRole('button', {
    //         name: /favorite/i,
    //     });

    //     // Симулируем клик на кнопку
    //     favoriteButton.click();

    //     // Проверяем, что состояние избранного изменилось
    //     expect(favoriteHelper.isFavorite).toHaveBeenCalledWith(mockArt);
    // });
});
