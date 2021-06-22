import React from 'react';
import PropTypes from 'prop-types';
import styles from './Promotion.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const Promotion = ({ name, stars, priceActuall, priceTop }) => (
  <div className={styles.content}>
    <div className={styles.triangle1}></div>
    {priceTop ? (
      <div className={styles.discount}>
        <div>
          <p>{priceActuall}</p>
          <p>{priceTop}</p>
        </div>
      </div>
    ) : null}
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
);

Promotion.propTypes = {
  name: PropTypes.string,
  priceTop: PropTypes.string,
  priceActuall: PropTypes.string,
  stars: PropTypes.number,
};

export default Promotion;
