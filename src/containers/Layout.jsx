import React from 'react';

import '@styles/containers/layout.scss';
import Header from '@components/Header';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <footer>Footer</footer>
  </>
);

export default Layout;
