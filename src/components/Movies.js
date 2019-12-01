import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => 
          <div>
            <h2>Movie Title: {movie.title}</h2>
            <h3>Duration: {movie.time}</h3>
            <h3>Movie Genres:</h3>
            <ul>{movie.genres.map(genre =>
              <li>{genre}</li>)}
            </ul>
          </div>)}
    </div>
  );
};

export default Movies;
