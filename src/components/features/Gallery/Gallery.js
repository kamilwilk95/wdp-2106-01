import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';
import { FaExchangeAlt } from 'react-icons/fa';
import { BiBasket } from 'react-icons/bi';
import {
  AiOutlineRight,
  AiOutlineLeft,
  AiFillEye,
  AiOutlineHeart,
} from 'react-icons/ai';
import Promotion from '../../common/Promotion/Promotion';

function Gallery({ gallery, setActive }) {
  const [activeCategory, setCategory] = useState('Features');
  const [activePage, setActivePage] = useState(0);
  const categories = [];
  for (let i of gallery) {
    if (i.sectionName != undefined) {
      categories.push(i.sectionName);
    }
  }
  const [photoIndex, setPhotoIndex] = useState(1);
  gallery.map(section => section.advImgs.filter(element => photoIndex == element.id));
  let arrayWithValues;
  let allPhotos;
  for (let i of gallery) {
    if (i.sectionName == activeCategory) {
      allPhotos = i.advImgs;
      arrayWithValues = i.advImgs.filter(element => photoIndex == element.id);
    }
  }
  const value = arrayWithValues[0].pic;

  function sliderSize() {
    if (window.innerWidth > 1200) {
      return 6;
    } else if (window.innerWidth < 1199 && window.innerWidth > 992) {
      return 5;
    } else if (window.innerWidth < 991 && window.innerWidth > 768) {
      return 3;
    } else if (window.innerWidth < 767 && window.innerWidth > 576) {
      return 2;
    } else if (window.innerWidth < 575 && window.innerWidth > 514) {
      return 5;
    } else if (window.innerWidth < 513 && window.innerWidth > 428) {
      return 4;
    } else if (window.innerWidth < 427 && window.innerWidth > 346) {
      return 3;
    } else if (window.innerWidth < 345 && window.innerWidth > 266) {
      return 2;
    }
  }
  const [n, setN] = useState(sliderSize());
  useEffect(() => {
    window.addEventListener('resize', () => setN(sliderSize));
  }, []);
  const pagesCount = Math.ceil(allPhotos.length / n);
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
                    onClick={() => (
                      setCategory(item), setPhotoIndex('1'), setActivePage(0)
                    )}
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
                    <Promotion
                      name={section.name}
                      stars={section.stars}
                      priceActuall={section.priceActuall}
                      priceTop={section.priceTop}
                    />
                  </div>
                  <div className={styles.slider}>
                    <button
                      disabled={activePage == 0}
                      onClick={() => setActivePage(activePage - 1)}
                    >
                      <AiOutlineLeft className={styles.icon} />
                    </button>
                    {section.advImgs
                      .slice(activePage * n, (activePage + 1) * n)
                      .map(photo => (
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
                      disabled={activePage + 1 == pagesCount}
                      onClick={() => setActivePage(activePage + 1)}
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
