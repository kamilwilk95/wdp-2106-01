import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Brands from '../../features/Brands/BrandsContainer';
import StickyBarContainer from '../StickyBar/StickyBarContainer';
import LatestBlog from '../../features/LatestBlog/LatestBlogContainer';
import Promo from '../../features/Promo/PromoContainer';


const MainLayout = ({ children }) => (
  <div>
    <Header />
    <StickyBarContainer />
    <Promo />
    {children}
    <LatestBlog />
    <Brands />
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.string,
  changeMode: PropTypes.func,
};

export default MainLayout;
