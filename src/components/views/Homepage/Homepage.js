import React from 'react';
import Promotions from '../../features/Promotions/PromotionsContainer';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedbacks from '../../features/Feedbacks/FeedbacksContainer';
import Gallery from '../../features/Gallery/GalleryContainer';
import GalleryContainer from '../../features/Gallery/GalleryContainer';
import Brands from '../../features/Brands/BrandsContainer';
import LatestBlog from '../../features/LatestBlog/LatestBlogContainer';
import Promo from '../../features/Promo/PromoContainer';

const Homepage = () => (
  <div className={styles.root}>
    <Promo />
    <FeatureBoxes />
    <Promotions />
    <NewFurniture />
    <Feedbacks />
    <GalleryContainer />
    <LatestBlog />
    <Brands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
