import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductPage.module.scss';

import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { IoMdResize } from 'react-icons/io';

const ProductPage = ({ products }) => (
  <div className={styles.root}>
    <div className={styles.grayRectangle}>
      <div className='container'>
        <div className={styles.topBar}>
          <h3>Furniture</h3>
          <p>Home &gt; Furniture &gt; Chair</p>
        </div>
        <div className={styles.productDescription}>
          <div className={styles.gallery}>
            <div className={styles.image}>
              <img
                src='https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg'
                alt='product'
              />
              <IoMdResize className={styles.icon} />
            </div>
            <div className={styles.gallerySlider}>
              <div className={styles.buttonField}>
                <button className={styles.sliderBtnLeft}>
                  <AiOutlineLeft className={styles.icon} />
                </button>
              </div>
              <div className={styles.slider}>
                {products.map(photo => (
                  <div className={styles.slide} key={photo.id}>
                    <img
                      className={photo.active ? '' : ' ' + styles.inactive}
                      src={photo.photo}
                      alt={'furniture-sale-' + photo.id}
                    />
                  </div>
                ))}
              </div>
              <div className={styles.buttonField}>
                <button className={styles.sliderBtnRight}>
                  <AiOutlineRight className={styles.icon} />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.description}></div>
        </div>
      </div>
    </div>
  </div>
);

ProductPage.propTypes = {
  products: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default ProductPage;
