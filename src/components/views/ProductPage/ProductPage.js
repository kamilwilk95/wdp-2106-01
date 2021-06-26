import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './ProductPage.module.scss';

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { IoMdResize } from 'react-icons/io';

const ProductPage = ({ gallery, setActive }) => {
  const [activeCategory] = useState('Features');
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
      return 5;
    } else if (window.innerWidth < 1199 && window.innerWidth > 992) {
      return 4;
    } else if (window.innerWidth < 991 && window.innerWidth > 768) {
      return 3;
    } else if (window.innerWidth < 767 && window.innerWidth > 346) {
      return 2;
    } else if (window.innerWidth < 345 && window.innerWidth > 266) {
      return 1;
    }
  }
  const [n, setN] = useState(sliderSize());
  useEffect(() => {
    window.addEventListener('resize', () => setN(sliderSize));
  }, []);
  const pagesCount = Math.ceil(allPhotos.length / n);

  return (
    <div className={styles.root}>
      <div className={styles.grayRectangle}>
        <div className='container'>
          <div className={styles.topBar}>
            <h3>Furniture</h3>
            <p>Home &gt; Furniture &gt; Chair</p>
          </div>
          <div className={styles.productDescription}>
            <div className={styles.galleryFeature}>
              <div className={styles.gallery}>
                {gallery.map(section =>
                  section.sectionName == activeCategory ? (
                    <div className={styles.gallery}>
                      <div className={styles.image} key={photoIndex}>
                        <img src={value} alt={'furniture-sale-' + photoIndex} />
                        <IoMdResize className={styles.icon} />
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
            </div>
            <div className={styles.description}>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductPage.propTypes = {
  gallery: PropTypes.object,
  setActive: PropTypes.func,
};

export default ProductPage;
