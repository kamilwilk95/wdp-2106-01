import React from 'react';
import PropTypes from 'prop-types';

import styles from './Promotion.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const Promotion = ({ promo }) => (
  <div className={styles.content}>
    <div className={styles.triangle1}></div>
    <div className={styles.discount}>
      <div>
        <p>$120.00</p>
        <p>$160.00</p>
      </div>
    </div>
    <h5>{promo.name}</h5>
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <a key={i} href='#'>
          {i <= promo.stars ? (
            <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
          )}
        </a>
      ))}
    </div>
    <div className={styles.triangle2}></div>
  </div>
);

Promotion.propTypes = {
  promo: PropTypes.object,
};

export default Promotion;
