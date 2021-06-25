import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Promo.module.scss';

const Promo = ({ promo }) => {
  return (
    <div className={styles.root}>
      <div className={'container ' + styles.container}>
        <div className='row'>
          <div className='col-3'></div>
          <div className='col-9'></div>
        </div>
      </div>
    </div>
  );
};

Promo.propTypes = {
  promo: PropTypes.array,
};

export default Promo;
