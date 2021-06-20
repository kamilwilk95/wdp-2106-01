import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import StairsContainer from '../Stars/StairsContainer.js';

const ProductBox = ({
  name,
  id,
  price,
  oldprice,
  promo,
  stars,
  myStarsChoice,
  favourite,
  addedToCompare,
  setFavouriteValue,
  setAddToCompareValue,
  photo,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <Link to={`/product/${id}`}>
        <img className={styles.image} src={photo} alt='furniture' />
      </Link>
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
      <StairsContainer stars={stars} myStarsChoice={myStarsChoice} id={id} />
    </div>
    <div className={styles.line}></div>
    <div className={styles.actions}>
      <div className={styles.outlines}>
        <Button
          onClick={
            favourite
              ? e => (setFavouriteValue(id, false), e.preventDefault())
              : e => (setFavouriteValue(id, true), e.preventDefault())
          }
          className={favourite ? styles.active : ''}
          variant='outline'
        >
          <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
        </Button>
        <Button
          onClick={
            addedToCompare
              ? e => (setAddToCompareValue(id, false), e.preventDefault())
              : e => (setAddToCompareValue(id, true), e.preventDefault())
          }
          className={addedToCompare ? styles.active : ''}
          variant='outline'
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
  myStarsChoice: PropTypes.number,
  stars: PropTypes.number,
  favourite: PropTypes.bool,
  addedToCompare: PropTypes.bool,
  setFavouriteValue: PropTypes.func,
  setAddToCompareValue: PropTypes.func,
  photo: PropTypes.string,
};

export default ProductBox;
