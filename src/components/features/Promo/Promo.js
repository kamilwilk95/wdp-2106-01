import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Promo.module.scss';
import Button from '../../common/Button/Button';
import Stars from '../../common/Stars/Stars';
import Carousel from 'react-elastic-carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faExchangeAlt,
  faEye,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Promo = ({ promo, deals }) => {
  const n = 1;
  const [activePage, setActivePage] = useState(0);
  const [activePageStyle, setActivePageStyle] = useState(styles.fadeIn);
  const next = e => {
    e.preventDefault();
    if (activePage >= 0 && activePage < promo.length / n - 1) {
      setActivePage(activePage + 1);
      setActivePageStyle(styles.fadeOut);
      setTimeout(() => {
        setActivePageStyle(styles.fadeIn);
      }, 300);
    }
  };
  const prev = e => {
    e.preventDefault();
    if (activePage > 0 && activePage <= promo.length / n - 1) {
      setActivePage(activePage - 1);
      setActivePageStyle(styles.fadeOut);
      setTimeout(() => {
        setActivePageStyle(styles.fadeIn);
      }, 300);
    }
  };
  return (
    <div className={styles.root}>
      <div className={'container ' + styles.container}>
        <div className='row'>
          <div className={'d-none d-lg-block col-md-4 carouselPromo ' + styles.boxes}>
            <Carousel enableAutoPlay='true' easing='ease' autoPlaySpeed='3000'>
              {deals.map(deal => (
                <div key={deal.id} className={styles.carouselBox}>
                  <div className={styles.head}>
                    <h5>HOT DEALS</h5>
                  </div>
                  <img className={styles.dealsImg} src={deal.src} alt='promo' />
                  <Button className={styles.cartButton} noHover variant='small'>
                    {' '}
                    <FontAwesomeIcon icon={faShoppingBasket}>
                      Favorite
                    </FontAwesomeIcon>{' '}
                    Add to Cart
                  </Button>
                  <div className={styles.divSpan}>
                    <span>
                      25 <br />
                      days
                    </span>
                    <span>
                      10 <br />
                      hours
                    </span>
                    <span>
                      45 <br />
                      mins
                    </span>
                    <span>
                      30 <br />
                      secs
                    </span>
                  </div>
                  <h5 className={styles.bottomTitle}>Aean Ru Bristique</h5>
                  <div className={styles.starsDiv}>
                    <Stars />
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.outlines}>
                    <Button variant='outline'>
                      <FontAwesomeIcon icon={faEye}>Favorite</FontAwesomeIcon>
                    </Button>
                    <Button variant='outline'>
                      <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                    </Button>
                    <Button variant='outline'>
                      <FontAwesomeIcon icon={faExchangeAlt}>
                        Add to compare
                      </FontAwesomeIcon>
                    </Button>
                    <div className={styles.price_old}>
                      <div className={styles.price_old_value}>$ 400.00</div>
                    </div>
                    <div className={styles.price}>
                      <Button noHover variant='small'>
                        $ 300.00
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <div className={'col-xs-12 col-lg-8 ' + styles.boxes}>
            {promo.slice(activePage * n, (activePage + 1) * n).map(promo => (
              <div key={promo.id} className={activePageStyle}>
                <div className={styles.mapBox}>
                  <img src={promo.src} alt='promo' />
                  <div className={styles.indoor}>
                    <h4>
                      INDOOR <span>FURNITURE</span>
                    </h4>
                    <h5>SAVE UP TO 50% TO ALL FURNITURE</h5>
                  </div>
                  <Button className={styles.indoorButton} noHover variant='outline'>
                    Shop now
                  </Button>
                </div>
              </div>
            ))}
            <div>
              <Button variant='small' className={styles.button} onClick={prev}>
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
              </Button>
              <Button variant='small' className={styles.button} onClick={next}>
                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Promo.propTypes = {
  promo: PropTypes.array,
  deals: PropTypes.array,
};

export default Promo;
