import { favoriteHelper } from '@src/helpers/FavoriteHelper';

import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFound from '../NotFound';
import './App.css';

const Layout = lazy(() => import('../../components/Layout'));
const Home = lazy(() => import('../Home'));
const Favorite = lazy(() => import('../Favorite'));
const Details = lazy(() => import('../Details'));

// Создаем константу с путями и соответствующими компонентами
const routes = [
    { path: '/', element: <Home />, index: true },
    { path: 'favorite', element: <Favorite /> },
    { path: 'details/:id', element: <Details /> },
    { path: '*', element: <NotFound /> },
];

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    {routes.map((route, index) =>
                        route.index ? (
                            <Route key={index} index element={route.element} />
                        ) : (
                            <Route
                                key={index}
                                path={route.path}
                                element={route.element}
                            />
                        ),
                    )}
                </Route>
            </Routes>
        </>
    );
}

export default App;
