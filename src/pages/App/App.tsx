import { Routes, Route } from 'react-router';
import './App.css';

import Layout from '../../components/Layout';
import Home from '../Home';
import Favorite from '../Favorite/indes';
import Details from '../Details';

function App() {
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
