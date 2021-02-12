import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import '@styles/containers/layout.scss';
import Header from '@components/Header';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
