import React from 'react';
import styles from './StickyBar.module.scss';
import { BsFillTrashFill } from 'react-icons/bs';
import Button from '../../common/Button/Button.js';
import PropTypes from 'prop-types';

function StickyBar(props) {
  const listOfComparingProducts = props.products.filter(
    element => element.addToCompare === true
  );

  return (
    <div
      className={
        listOfComparingProducts.length !== 0 ? styles.component : styles.hidden
      }
    >
      {listOfComparingProducts.map(product => (
        <div className={styles.photoWrapper} key={product.id}>
          <img src={product.photo} alt={product.id} />
          <BsFillTrashFill
            onClick={() => props.setaddToCompareValue(product.id, false)}
            className={styles.icon}
          />
        </div>
      ))}
      <Button variant='small'>Compare</Button>
    </div>
  );
}

StickyBar.propTypes = {
  products: PropTypes.array,
  setaddToCompareValue: PropTypes.func,
};

export default StickyBar;
