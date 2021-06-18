import React from 'react';
import styles from './StickyBar.module.scss';
import Button from '../../common/Button/Button.js';
import PropTypes from 'prop-types';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function StickyBar(props) {
  const listOfComparingProducts = props.products.filter(
    element => element.addedToCompare === true
  );
  //console.log(listOfComparingProducts);

  return (
    <div
      className={
        listOfComparingProducts.length !== 0 ? styles.component : styles.hidden
      }
    >
      {listOfComparingProducts.map(product => (
        <div className={styles.photoWrapper} key={product.id}>
          <img src={product.photo} alt={product.id} />
          <FontAwesomeIcon
            icon={faTrashAlt}
            onClick={() => props.setAddToCompareValue(product.id, false)}
            className={product.photo ? styles.photoExist : styles.photoNoExist}
          />
        </div>
      ))}
      <Button variant='small'>Compare</Button>
    </div>
  );
}

StickyBar.propTypes = {
  products: PropTypes.array,
  setAddToCompareValue: PropTypes.func,
};

export default StickyBar;
