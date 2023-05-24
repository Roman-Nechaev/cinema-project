// import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';

import { Home } from './pages/Home/Home';
import { Search } from './pages/Search/Search';
import { Favorites } from './pages/Favorites/Favorites';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';
import { PopularMoviesPages } from './pages/PopularMovies/PopularMoviesPages';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/popular" element={<PopularMoviesPages />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="movies/:moviesId" element={<MovieDetails />}></Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
