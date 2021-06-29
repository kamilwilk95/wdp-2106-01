import React from 'react';
import Stars from '../../common/Stars/Stars';

// import PropTypes from 'prop-types';

import styles from './Comments.module.scss';

const Comments = () => (
  <div className={styles.root}>
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

// Comments.propTypes = {};

export default Comments;
