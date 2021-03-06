import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FeatureBox.module.scss';

const FeatureBox = ({ active, icon, children }) => (
  <div className={styles.root}>
    {icon && (
      <a href='#' className={styles.iconWrapper}>
        <FontAwesomeIcon className={styles.icon} icon={icon} />
      </a>
    )}
    <div className={styles.content}>{children}</div>
  </div>
);

FeatureBox.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.object,
  active: PropTypes.bool,
};

export default FeatureBox;
