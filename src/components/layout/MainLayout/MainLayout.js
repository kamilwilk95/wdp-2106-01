import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Brands from '../../features/Brands/BrandsContainer';
import StickyBarContainer from '../StickyBar/StickyBarContainer';
import LatestBlog from '../../features/LatestBlog/LatestBlogContainer';

const MainLayout = ({ children }) => {
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    mode: '',
  });
  React.useEffect(() => {
    function handleResize() {
      if (dimensions.width < 768) {
        setDimensions({
          width: window.innerWidth,
          mode: 'mobile',
        });
      } else if (dimensions.width >= 768 && dimensions.width < 992) {
        setDimensions({
          width: window.innerWidth,
          mode: 'tablet',
        });
      } else if (dimensions.width >= 992) {
        setDimensions({
          width: window.innerWidth,
          mode: 'desktop',
        });
      }
    }

    window.addEventListener('resize', handleResize);
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
};

export default MainLayout;
