import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { FaExchangeAlt } from 'react-icons/fa';
import { BiBasket } from 'react-icons/bi';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import Promotion from '../../common/Promotion/PromotionContainer';

const Gallery = ({ gallery }) => {
  const [activeCategory, setCategory] = useState('Features');
  const categories = [];
  for (let i of gallery) {
    if (i.sectionName != undefined) {
      categories.push(i.sectionName);
    }
  }
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.flex}>
          <div className={styles.galleryFeature}>
            <div className={styles.heading}>
              <h3>Furniture gallery</h3>
            </div>
            <ul className={styles.menuBtns}>
              {categories.map(item => (
                <li key={item}>
                  <a
                    className={item === activeCategory ? styles.active : styles.hidden}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            {gallery.map(section =>
              section.sectionName == activeCategory ? (
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
                    <img src={section.sale} alt='furniture-sale' />
                    <Promotion />
                  </div>
                  <div className={styles.slider}>
                    <button className={styles.sliderBtnLeft}>
                      <AiOutlineLeft className={styles.icon} />
                    </button>
                    {section.advImgs.map(photo => (
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
              ) : null
            )}
          </div>
          <div className={styles.galleryFeature}>
            {gallery.map(section =>
              section.sectionName == activeCategory ? (
                <div className={styles.advertisement}>
                  <img src={section.advertisement} alt='advertisement' />
                </div>
              ) : null
            )}
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
