import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Brands from '../../features/Brands/BrandsContainer';
import StickyBarContainer from '../StickyBar/StickyBarContainer';
import LatestBlog from '../../features/LatestBlog/LatestBlogContainer';

const MainLayout = ({ children, mode, changeMode }) => {
  React.useEffect(() => {
    window.addEventListener('resize', changeMode);
  });
  return (
    <div>
      <Header />
      <StickyBarContainer />
      {children}
      <LatestBlog />
      <Brands />
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
