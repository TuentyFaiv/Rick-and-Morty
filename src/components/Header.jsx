import React from 'react';
import { NavLink } from 'react-router-dom';

import '@styles/components/header.scss';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="active" exact to="/">
            <strong>Home</strong>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/characters">
            <strong>Characters</strong>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/locations">
            <strong>Locations</strong>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/episodes">
            <strong>Episodes</strong>
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
