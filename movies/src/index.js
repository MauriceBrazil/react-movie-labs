import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingPage";
import SiteHeader from './components/siteHeader'

const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route exact path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
     
        {/* <Route exact path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/movies/upcoming" element={<UpcomingPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } /> */}
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);