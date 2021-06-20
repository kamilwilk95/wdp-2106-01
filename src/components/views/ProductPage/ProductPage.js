import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';

const ProductPage = () => (
  <div className={styles.root}>
    <div className={styles.grayRectangle}>
      <div className='container'>
        <div className={styles.topBar}>
          <h3>Furniture</h3>
          <p>Home &gt; Furniture &gt; Chair</p>
        </div>
        <div className={styles.productDescription}></div>
      </div>
    </div>
  </div>
);

// ProductPage.propTypes = {};

export default ProductPage;
