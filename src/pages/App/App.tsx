import { favoriteHelper } from '@src/helpers/FavoriteHelper';

import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFound from '../NotFound';
import './App.css';

const Layout = lazy(() => import('../../components/Layout'));
const Home = lazy(() => import('../Home'));
const Favorite = lazy(() => import('../Favorite'));
const Details = lazy(() => import('../Details'));

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='favorite' element={<Favorite />} />
                    <Route path='details/:id' element={<Details />} />
                </Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </>
    );
}

export default App;
