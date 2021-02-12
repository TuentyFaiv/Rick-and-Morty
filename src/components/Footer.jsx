import React from 'react';

import '@styles/components/footer.scss';

const Footer = () => (
  <footer>
    <h5>
      Created by
      {' '}
      <a href="https://twitter.com/TuentyFaiv" target="_blank" rel="noopener noreferrer">
        TuentyFaiv
      </a>
    </h5>
    <h6>
      Using
      {' '}
      <a href="https://rickandmortyapi.com" target="_blank" rel="noopener noreferrer">
        The Rick and Morty API
      </a>
    </h6>
  </footer>
);

export default Footer;
