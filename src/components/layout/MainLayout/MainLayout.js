import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import StickyBarContainer from '../StickyBar/StickyBarContainer';

const MainLayout = ({ children, changeMode }) => {
  useEffect(() => {
    window.addEventListener('resize', changeMode);
    return () => {
      window.removeEventListener('resize', changeMode);
    };
  }, [changeMode]);
  return (
    <div>
      <Header />
      <StickyBarContainer />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.string,
  changeMode: PropTypes.func,
};

export default MainLayout;
