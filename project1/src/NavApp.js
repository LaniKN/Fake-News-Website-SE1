import React from 'react';
import './pages/format.css'
import Navbar from './Components/navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages';
import ArtMain from './pages/9-27-article-1';

function App() {
    return (
        <BrowserRouter>
          <Navbar />
          <Routes>
                <Route path='/queer-takes' exact element={
                    <Home />
                    } />
                <Route path='/9-27-article-1' element={
                    <ArtMain />
                    } />
          </Routes>
        </BrowserRouter>
    );

}

export default App;
