import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <NavLink to='/'
                   exact
                   activeStyle={{background: 'pink'}}
          >Home</NavLink>
        </li>
        <li>
          <NavLink to='/movies'
                   exact
                   activeStyle={{background: 'pink'}}
          >Movies</NavLink>
        </li>
        <li>
          <NavLink to='/directors'
                   exact
                   activeStyle={{background: 'pink'}}
          >Directors</NavLink>
        </li>
        <li>
          <NavLink to='/actors'
                   exact
                   activeStyle={{background: 'pink'}}
          >Actors</NavLink>
        </li>

      </ul>
    </div>
  );
};

export default NavBar;
