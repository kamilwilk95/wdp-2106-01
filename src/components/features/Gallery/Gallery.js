import React from 'react';
import PropTypes from 'prop-types';

import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import {
//   faStar as farStar,
//   faHeart,
//   faExchangeAlt,
//   faEye,
//   faShoppingBasket,
// } from '@fortawesome/free-regular-svg-icons';

import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { FaExchangeAlt } from 'react-icons/fa';
import { BiBasket } from 'react-icons/bi';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';

import Stars from '../../common/Stars/StarsContainer';

const Gallery = ({ gallery }) => {
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
              <Button className={styles.btn + ' active'}>Top seller</Button>
              <Button className={styles.btn}>Sale off</Button>
              <Button className={styles.btn}>Top rated</Button>
            </div>
            <div className={styles.gallery}>
              <div className={styles.galleryBtns}>
                {/* {gallery.icons.map(item => (
                  <a href='#' key={item.id}>
                    <FontAwesomeIcon icon={item.icon} className={styles.icon} />
                  </a>
                ))} */}
                <a href='#'>
                  <AiOutlineHeart className={styles.icon} />
                </a>
                <a href='#'>
                  <FaExchangeAlt className={styles.icon} />
                </a>
                <a href='#'>
                  <AiFillEye className={styles.icon} />
                </a>
                <a href='#'>
                  <BiBasket className={styles.icon} />
                </a>
              </div>
              <div className={styles.image}>
                <img src={gallery.sale} alt='furniture-sale' />
                <Stars />
              </div>
            </div>
            <div className={styles.slider}>
              <button className={styles.sliderBtnLeft}>
                <AiOutlineLeft className={styles.icon} />
              </button>
              {gallery.advImgs.map(photo => (
                <div className={styles.slide} key={photo.id}>
                  <div className={styles.slide}>
                    <img
                      className={photo.active ? '' : ' ' + styles.inactive}
                      src={photo.pic}
                      alt={'furniture-sale-' + photo.id}
                    />
                  </div>
                </div>
              ))}
              <button className={styles.sliderBtnRight}>
                <AiOutlineRight className={styles.icon} />
              </button>
            </div>
          </div>
          <div className={styles.galleryFeature}>
            <div className={styles.advertisement}>
              <img src={gallery.advertisement} alt='advertisement' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Gallery.propTypes = {
  // stars: PropTypes.number,
  // name: PropTypes.string,
  gallery: PropTypes.object,
};

export default Gallery;
