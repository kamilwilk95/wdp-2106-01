import React from 'react';
import PropTypes from 'prop-types';

import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';

import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { FaExchangeAlt } from 'react-icons/fa';
import { BiBasket } from 'react-icons/bi';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';

import Stars from '../../common/Promotion/PromotionContainer';

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
                <div className={styles.tooltip}>
                  <a href='#'>
                    <AiOutlineHeart className={styles.icon} />
                  </a>
                  <span className={styles.tooltiptext}>Like</span>
                </div>
                <div className={styles.tooltip}>
                  <a href='#'>
                    <FaExchangeAlt className={styles.icon} />
                  </a>
                  <span className={styles.tooltiptext}>Change view</span>
                </div>
                <div className={styles.tooltip}>
                  <a href='#'>
                    <AiFillEye className={styles.icon} />
                  </a>
                  <span className={styles.tooltiptext}>See more</span>
                </div>
                <div className={styles.tooltip}>
                  <a href='#'>
                    <BiBasket className={styles.icon} />
                  </a>
                  <span className={styles.tooltiptext}>Add to basket</span>
                </div>
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
  gallery: PropTypes.object,
};

export default Gallery;
