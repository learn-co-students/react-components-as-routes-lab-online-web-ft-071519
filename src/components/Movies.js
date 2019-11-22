import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      <ul>
        {movies.map((m, i) => (
          <div key={i}>
            <h3>Name: {m.title}</h3>
            <h4>Time: {m.time}</h4>
            <h4>Genres:</h4>
            <ul>
              {m.genres.map(g => <li>{g}</li>)}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Movies;
