import React from 'react';
import Stars from '../../common/Stars/Stars';
// import PropTypes from 'prop-types';
import styles from './Summary.module.scss';

const Summary = () => (
  <div className={styles.root}>
    <div className={styles.summaryBar}>
      <button>Description</button>
      <button className={styles.active}>Reviews (0)</button>
      <button>Specification</button>
      <button>Custom tab</button>
    </div>
    <div className={styles.rating}>
      <p>There are no reviews for this product</p>
      <h3>Add a review</h3>
      <p>Your rating:</p>
      <p className={styles.rate}>Bad</p>
      <div className={styles.stars}>
        <Stars />
      </div>
      <p className={styles.rate}>Good</p>
      <div className={styles.form}>
        <label>Your Review:</label>
        <input className={styles.comment} type='textarea' />
        <div className={styles.name}>
          <input type='text' placeholder='*Name' />
          <input type='text' placeholder='*Email' />
          <button>Continue</button>
        </div>
      </div>
    </div>
  </div>
);

// Summary.propTypes = {};

export default Summary;
