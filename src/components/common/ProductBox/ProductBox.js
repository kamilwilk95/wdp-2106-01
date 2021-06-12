import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const ProductBox = ({
  name,
  id,
  price,
  oldprice,
  promo,
  stars,
  favourite,
  addToCompare,
  setFavouriteValue,
  setAddToCompareValue,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      {promo && <div className={styles.sale}>{promo}</div>}
      <div className={styles.buttons}>
        <Button variant='small'>Quick View</Button>
        <Button variant='small'>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
        </Button>
      </div>
    </div>
    <div className={styles.content}>
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
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button
          onClick={
            favourite
              ? () => setFavouriteValue(id, false)
              : () => setFavouriteValue(id, true)
          }
          className={favourite ? styles.active : ''}
          variant='outline'
          hrefAdress='javascript: void(0)'
        >
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button
          onClick={
            addToCompare
              ? () => setAddToCompareValue(id, false)
              : () => setAddToCompareValue(id, true)
          }
          className={addToCompare ? styles.active : ''}
          variant='outline'
          hrefAdress='javascript: void(0)'
        >
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      </div>
      {oldprice ? (
        <div className={styles.price_old}>
          <div className={styles.price_old_value}>${oldprice}</div>
        </div>
      ) : (
        ''
      )}
      <div className={styles.price}>
        <Button noHover variant='small'>
          $ {price}
        </Button>
      </div>
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  oldprice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  favourite: PropTypes.bool,
  addToCompare: PropTypes.bool,
  setFavouriteValue: PropTypes.func,
  setAddToCompareValue: PropTypes.func,
};

export default ProductBox;
