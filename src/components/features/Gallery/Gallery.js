import React from 'react';
import PropTypes from 'prop-types';

import styles from './Gallery.module.scss';
import Button from '../../common/Button/Button';
// import ProductBox from '../../common/ProductBox/ProductBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { FaExchangeAlt } from 'react-icons/fa';
import { BiBasket } from 'react-icons/bi';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';

const Gallery = ({ stars, name, advImgs }) => {
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
                <img
                  src='https://i.ibb.co/RjH10Wd/pexels-ksenia-chernaya-3965520-1.jpg'
                  alt='furniture-sale'
                />
                <div className={styles.content}>
                  <h5>{name}</h5>
                  <div className={styles.stars}>
                    {[1, 2, 3, 4, 5].map(i => (
                      <a key={i} href='#'>
                        {i <= stars ? (
                          <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                        ) : (
                          <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.slider}>
              <button className={styles.sliderBtnLeft}>
                <AiOutlineLeft className={styles.icon} />
              </button>
              <div className={styles.slide}>
                <img
                  src='https://i.ibb.co/RjH10Wd/pexels-ksenia-chernaya-3965520-1.jpg'
                  alt='furniture-sale'
                />
              </div>
              <div className={styles.slide}>
                <img
                  className={styles.inactive}
                  src='https://i.ibb.co/RjH10Wd/pexels-ksenia-chernaya-3965520-1.jpg'
                  alt='furniture-sale'
                />
              </div>
              <div className={styles.slide}>
                <img
                  className={styles.inactive}
                  src='https://i.ibb.co/RjH10Wd/pexels-ksenia-chernaya-3965520-1.jpg'
                  alt='furniture-sale'
                />
              </div>
              <button className={styles.sliderBtnRight}>
                <AiOutlineRight className={styles.icon} />
              </button>
            </div>
          </div>
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
  stars: PropTypes.number,
  name: PropTypes.string,
  advImgs: PropTypes.object,
};

export default Gallery;
