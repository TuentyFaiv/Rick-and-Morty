import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
  <>
    <header>
      <Link to="/">Home</Link>
      <nav>
        <ul>
          <li><Link to="/characters">Characters</Link></li>
          <li><Link to="/locations">Locations</Link></li>
          <li><Link to="/episodes">Episodes</Link></li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
    <footer>Footer</footer>
  </>
);

export default Layout;
