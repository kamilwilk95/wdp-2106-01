import React, { useState } from 'react';
import styles from './Stars.module.scss';
import PropTypes from 'prop-types';
import '../../../styles/settings.scss';
import { FaStar, FaRegStar } from 'react-icons/fa';

function Stars(props) {
  const defaultStarsData = [
    { id: 1, hover: false },
    { id: 2, hover: false },
    { id: 3, hover: false },
    { id: 4, hover: false },
    { id: 5, hover: false },
  ];

  const [touch, setTouch] = useState(false);
  const [data, setData] = useState(defaultStarsData);

  function changeStars(id) {
    const newStarsData = [...defaultStarsData];
    const exactsIndexs = defaultStarsData.filter(element => element.id <= id);
    const arrayWithExactsIndexs = [];
    exactsIndexs.filter(element => arrayWithExactsIndexs.push(element.id));
    for (let i of newStarsData) {
      if (arrayWithExactsIndexs.includes(i.id)) {
        newStarsData[i.id - 1] = {
          ...i,
          hover: true,
        };
      }
    }
    setData(newStarsData);
  }

  function returnToBasicForm() {
    setData(defaultStarsData);
  }

  function touched() {
    setTouch(true);
  }

  function noTouched() {
    setTouch(false);
  }

  function basicLook(i) {
    return i.id <= props.stars ? (
      <FaStar
        onClick={e => (props.changeMyStarsChoice(i.id, props.id), e.preventDefault())}
        className={styles.normal}
      >
        {i.id} stars
      </FaStar>
    ) : (
      <FaRegStar
        onClick={e => (props.changeMyStarsChoice(i.id, props.id), e.preventDefault())}
        className={styles.normal}
      >
        {i.id} stars
      </FaRegStar>
    );
  }

  function isHoverFromBasicLook(i) {
    return i.hover ? (
      <FaStar
        onClick={e => (props.changeMyStarsChoice(i.id, props.id), e.preventDefault())}
        onMouseEnter={() => changeStars(i.id)}
        onMouseLeave={() => returnToBasicForm()}
        className={i.hover ? styles.hover : styles.normal}
      >
        {i.id} stars
      </FaStar>
    ) : (
      <FaRegStar
        className={styles.normal}
        onMouseEnter={() => changeStars(i.id)}
        onMouseLeave={() => returnToBasicForm()}
      >
        {i.id} stars
      </FaRegStar>
    );
  }

  function checkStars(i) {
    return i.id <= props.myStarsChoice ? (
      <FaStar
        onClick={e => (props.changeMyStarsChoice(i.id, props.id), e.preventDefault())}
        className={styles.hover}
      >
        {i.id} stars
      </FaStar>
    ) : (
      <FaRegStar className={styles.normal}>{i.id} stars</FaRegStar>
    );
  }

  function uncheckStars(i) {
    return i.hover ? (
      <FaStar
        onClick={e => (props.changeMyStarsChoice(i.id, props.id), e.preventDefault())}
        onMouseEnter={() => changeStars(i.id)}
        onMouseLeave={() => returnToBasicForm()}
        className={i.hover ? styles.hover : styles.normal}
      >
        {i.id} stars
      </FaStar>
    ) : (
      <FaRegStar
        className={styles.normal}
        onMouseEnter={() => changeStars(i.id)}
        onMouseLeave={() => returnToBasicForm()}
      >
        {i.id} stars
      </FaRegStar>
    );
  }

  function getStars(i) {
<<<<<<< HEAD
    if (props.myStarsChoice !== 0) {
      if (touch) {
        return uncheckStars(i);
      } else {
        return checkStars(i);
      }
    } else {
      if (touch) {
        return isHoverFromBasicLook(i);
      } else {
        return basicLook(i);
      }
    }
=======
    return props.myStarsChoice !== 0
      ? touch
        ? uncheckStars(i)
        : checkStars(i)
      : touch
        ? isHoverFromBasicLook(i)
        : basicLook(i);
>>>>>>> 7345ddc (stars)
  }

  return (
    <div
      className={styles.stars}
      onMouseEnter={() => touched()}
      onMouseLeave={() => noTouched()}
      onDoubleClick={e => (
        props.delateMyStarsChoice(props.stars, props.id), e.preventDefault()
      )}
    >
      {data.map(i => (
        <a key={i.id} href='#'>
          {getStars(i)}
        </a>
      ))}
    </div>
  );
}

Stars.propTypes = {
  stars: PropTypes.number,
  delateMyStarsChoice: PropTypes.func,
  id: PropTypes.string,
  myStarsChoice: PropTypes.number,
  changeMyStarsChoice: PropTypes.func,
};

export default Stars;
