import React from 'react';
import PropTypes from 'prop-types';

import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Brands = ({ brands }) => {
  const next = e => {
    e.preventDefault();
    const brandOne = document.querySelector('.brandOne');
    const brandTwo = document.querySelector('.brandTwo');
    brandOne.classList.remove('d-flex');
    brandOne.classList.add('d-none');
    brandTwo.classList.remove('d-none');
    brandTwo.classList.add('d-flex');
  };
  const prev = e => {
    e.preventDefault();
    const brandOne = document.querySelector('.brandOne');
    const brandTwo = document.querySelector('.brandTwo');
    brandOne.classList.remove('d-none');
    brandOne.classList.add('d-flex');
    brandTwo.classList.remove('d-flex');
    brandTwo.classList.add('d-none');
  };
  return (
    <div className={styles.root}>
      <div className={'container ' + styles.container}>
        <div className='row'>
          <div className='col-1 d-flex justify-content-end align-items-center'>
            <Button variant='small' className={styles.button} onClick={prev}>
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </Button>
          </div>
          <div className={'col-10 d-flex brandOne ' + styles.imageBox}>
            {brands.map(brandData =>
              brandData.id <= brands.length / 2 ? (
                <img key={brandData.id} src={brandData.src} alt='brands1' />
              ) : (
                ''
              )
            )}
          </div>
          <div className={'col-10 d-none brandTwo ' + styles.imageBox}>
            {brands.map(brandData =>
              brandData.id > brands.length / 2 ? (
                <img key={brandData.id} src={brandData.src} alt='brands2' />
              ) : (
                ''
              )
            )}
          </div>
          <div className='col-1 d-flex align-items-center'>
            <Button variant='small' className={styles.button} onClick={next}>
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;
