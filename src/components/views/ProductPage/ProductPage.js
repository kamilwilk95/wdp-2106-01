import React from 'react';
// import PropTypes from 'prop-types';

import styles from './ProductPage.module.scss';

import Stars from '../../common/Stars/Stars';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';

const ProductPage = () => (
  <div className={styles.root}>
    <div className={styles.grayRectangle}>
      <div className='container'>
        <div className={styles.topBar}>
          <h3>Furniture</h3>
          <p>Home &gt; Furniture &gt; Chair</p>
        </div>
        <div className={styles.productDescription}>
          <div className={styles.image}>
            <img
              src='https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg'
              alt='product-photo'
            />
          </div>
          <div className={styles.description}>
            <div className={styles.btns}>
              <button>
                <AiOutlineLeft className={styles.icon} />
              </button>
              <button>
                <AiOutlineRight className={styles.icon} />
              </button>
            </div>
            <div className={styles.header}>
              <h3>Sunday Magic Bear Sofa</h3>
              <div className={styles.rating}>
                <Stars />
                <p>(0 viewers) Add your review</p>
              </div>
            </div>
            <div className={styles.price}>
              <p>$350.00</p>
              <p>$250.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ProductPage.propTypes = {};

export default ProductPage;
