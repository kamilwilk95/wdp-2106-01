import React from 'react';
import PropTypes from 'prop-types';

import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';

const Gallery = gallery => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.flex}>
          <div className={styles.galleryFeature}>
            <div className={styles.heading}>
              <h3>Furniture gallery</h3>
            </div>
            <div className={styles.menuBtns}>
              <Button className={styles.btn}>Featured</Button>
              <Button className={styles.btn}>Top seller</Button>
              <Button className={styles.btn}>Sale off</Button>
              <Button className={styles.btn}>Top rated</Button>
            </div>
            <div className={styles.gallery}>
              <div className={styles.galleryBtns}>
                <a href='#'>
                  <i className='far fa-heart'></i>
                </a>
                <a href='#'>
                  <i className='fas fa-exchange-alt'></i>
                </a>
                <a href='#'>
                  <i className='far fa-eye'></i>
                </a>
                <a href='#'>
                  <i className='fas fa-shopping-basket'></i>
                </a>
              </div>
              <div className={styles.pictures}>
                <div className={styles.image}>
                  <img
                    src='https://i.ibb.co/RjH10Wd/pexels-ksenia-chernaya-3965520-1.jpg'
                    alt='furniture-sale'
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className={styles.gallery}></div> */}
          <div className={styles.galleryFeature}>
            <div className={styles.advertisement}>
              <img
                src={
                  'https://i.ibb.co/3rjWWmJ/pexels-arina-krasnikova-5424972-1.jpg'
                  // gallery.advertisementImg
                }
                alt='advertisement'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Gallery.propTypes = {
  gallery: PropTypes.object,
};

export default Gallery;
