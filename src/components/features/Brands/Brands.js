import React from 'react';
import PropTypes from 'prop-types';

import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';
import Brand from '../Brand/Brand';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Brands = ({ brands }) => (
  <div className={styles.root}>
    <div className={'container ' + styles.container}>
      <div className='row'>
        <div className='col-1 d-flex justify-content-end align-items-center'>
          <Button variant='small' className={styles.button}>
            <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
          </Button>
        </div>
        {brands.map(brandData => (
          <Brand key={brandData.id} src={brandData.src} />
        ))}
        <div className='col-1 d-flex align-items-center'>
          <Button variant='small' className={styles.button}>
            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
          </Button>
        </div>
      </div>
    </div>
  </div>
);

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;
