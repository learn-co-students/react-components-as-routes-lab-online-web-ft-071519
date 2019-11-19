import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(a => (
        <div>
          <h2>{a.name}</h2>
          <p>Movies:
            <ul>
              {a.movies.map(m => (
                <li>{m}</li>
              ))}
            </ul>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Actors;
