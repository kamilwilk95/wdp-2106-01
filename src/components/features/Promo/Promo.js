import React from 'react';
import PropTypes from 'prop-types';

import styles from './Promo.module.scss';
import Button from '../../common/Button/Button';
import Stars from '../../common/Stars/Stars';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Promo = ({ promo, deals }) => {
  return (
    <div className={styles.root}>
      <div className={'container ' + styles.container}>
        <div className='row'>
          <div className={'col-4 ' + styles.boxes}>
            <div className={styles.head}>
              <h5>HOT DEALS</h5>
            </div>
            <img className={styles.dealsImg} src={deals[0].src} alt='promo' />
            <h5 className={styles.bottomTitle}>Aean Ru Bristique</h5>
            <div className={styles.starsDiv}>
              <Stars />
            </div>
            <div className={styles.line}></div>
            <div className={styles.outlines}>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
              </Button>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
              </Button>
              <Button variant='outline'>
                <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
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
          <div className={'col-8 ' + styles.boxes}>
            <img src={promo[0].src} alt='promo' />
            <div>
              <Button variant='small' className={styles.button}>
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
              </Button>
              <Button variant='small' className={styles.button}>
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
