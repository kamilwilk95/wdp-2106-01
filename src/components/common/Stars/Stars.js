import React from 'react';
import styles from './Stars.module.scss';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const one = {
  color: 'pink',
};
const two = {
  color: 'pink',
};
const three = {
  color: 'pink',
};
const four = {
  color: 'pink',
};
const five = {
  color: 'pink',
};

function Stars(props) {
  return (
    <div className={styles.stars}>
      {[
        { id: 1, name: { one } },
        { id: 2, name: { two } },
        { id: 3, name: { three } },
        { id: 4, name: { four } },
        { id: 5, name: { five } },
      ].map(i => (
        <a key={i.id} href='#' style={i.name}>
          {i.id <= props.stars ? (
            <FontAwesomeIcon icon={faStar}>{i.id} stars</FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={farStar}>{i.id} stars</FontAwesomeIcon>
          )}
        </a>
      ))}
    </div>
  );
}

Stars.propTypes = {
  stars: PropTypes.number,
};

export default Stars;
