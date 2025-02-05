import { Routes, Route } from 'react-router-dom';
import './App.css';

import { lazy } from 'react';

const Layout = lazy(() => import('../../components/Layout'));
const Home = lazy(() => import('../Home'));
const Favorite = lazy(() => import('../Favorite'));
const Details = lazy(() => import('../Details'));

function App() {
    sessionStorage.setItem('favorite', '[]');

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='favorite' element={<Favorite />} />
                    <Route path='details/:id' element={<Details />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
