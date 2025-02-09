import { urls } from '@src/constants/constants';

import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

const Layout = lazy(() => import('@components/Layout'));
const Home = lazy(() => import('@pages/Home'));
const Favorite = lazy(() => import('@pages/Favorite'));
const Details = lazy(() => import('@pages/Details'));
const NotFound = lazy(() => import('@pages/NotFound'));

export const routes = [
    { path: urls.home, element: <Home />, index: true },
    { path: urls.favorite, element: <Favorite /> },
    { path: urls.details(null), element: <Details /> },
    { path: urls.notFound, element: <NotFound /> },
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
