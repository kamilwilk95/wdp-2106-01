import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { FaExchangeAlt } from 'react-icons/fa';
import { BiBasket } from 'react-icons/bi';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

function Gallery({ gallery, setActive }) {
  const [activeCategory, setCategory] = useState('Features');
  const categories = [];
  for (let i of gallery) {
    if (i.sectionName != undefined) {
      categories.push(i.sectionName);
    }
  }
  const [photoIndex, setPhotoIndex] = useState(1);
  gallery.map(section => section.advImgs.filter(element => photoIndex == element.id));
  let arrayWithValues;
  for (let i of gallery) {
    if (i.sectionName == activeCategory) {
      arrayWithValues = i.advImgs.filter(element => photoIndex == element.id);
    }
  }
  const value = arrayWithValues[0].pic;

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
                    onClick={() => (setCategory(item), setPhotoIndex('1'))}
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
                  <div className={styles.image} key={photoIndex}>
                    <img src={value} alt={'furniture-sale-' + photoIndex} />
                    <div className={styles.content}>
                      <div className={styles.triangle1}></div>
                      {section.priceTop ? (
                        <div className={styles.discount}>
                          <div>
                            <p>{section.priceActuall}</p>
                            <p>{section.priceTop}</p>
                          </div>
                        </div>
                      ) : null}
                      <h5>{section.name}</h5>
                      <div className={styles.stars}>
                        {[1, 2, 3, 4, 5].map(i => (
                          <a key={i} href='#'>
                            {i <= section.stars ? (
                              <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                            ) : (
                              <FontAwesomeIcon icon={farStar}>
                                {i} stars
                              </FontAwesomeIcon>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={styles.slider}>
                    {photoIndex == 1 ? (
                      <button
                        className={styles.sliderBtnLeft}
                        type='button'
                        disabled
                        onClick={() =>
                          photoIndex == 1
                            ? setPhotoIndex(1)
                            : setPhotoIndex(photoIndex - 1)
                        }
                      >
                        <AiOutlineLeft className={styles.icon} />
                      </button>
                    ) : (
                      <button
                        className={styles.sliderBtnLeft}
                        onClick={() =>
                          photoIndex == 1
                            ? (setPhotoIndex(1), setActive(1, true, activeCategory))
                            : (setPhotoIndex(parseInt(photoIndex) + -1),
                              setActive(photoIndex - 1, true, activeCategory))
                        }
                      >
                        <AiOutlineLeft className={styles.icon} />
                      </button>
                    )}

                    {section.advImgs.map(photo => (
                      <div className={styles.slide} key={photo.id}>
                        <div className={styles.slide}>
                          <img
                            className={
                              photo.active
                                ? styles.activeElement
                                : ' ' + styles.inactiveElement
                            }
                            key={photo.pic}
                            src={photo.pic}
                            alt={'furniture-sale-' + photo.id}
                            onClick={() => (
                              setPhotoIndex(photo.id),
                              setActive(photo.id, true, activeCategory)
                            )}
                          />
                        </div>
                      </div>
                    ))}
                    <button
                      className={styles.sliderBtnRight}
                      onClick={() =>
                        photoIndex == 6
                          ? (setPhotoIndex(6), setActive(6, true, activeCategory))
                          : (setPhotoIndex(parseInt(photoIndex) + 1),
                            setActive(photoIndex + 1, true, activeCategory))
                      }
                    >
                      <AiOutlineRight className={styles.icon} />
                    </button>
                  </div>
                </div>
              ) : null
            )}
          </div>
          <div className={styles.galleryFeature}>
            <div className={styles.advertisement}>
              <img
                src='https://images.pexels.com/photos/3837464/pexels-photo-3837464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                alt='advertisement'
              />
              <div className={styles.triangle2}>
                <p>
                  from<span> $60.45</span>
                </p>
                <p>Cosy Table</p>
                <a>SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Gallery.propTypes = {
  gallery: PropTypes.object,
  setActive: PropTypes.func,
};

export default Gallery;
