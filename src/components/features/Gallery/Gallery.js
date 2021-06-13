import React from 'react';
import PropTypes from 'prop-types';

import styles from './Gallery.module.scss';

const Gallery = () => (
  <div className='root'>
    <div className='container'>
      <div className='row'>
        <div className={'col ' + styles.gallery}>galeria</div>
        <div className={'col ' + styles.advertisement}>reklama</div>
      </div>
    </div>
  </div>
);

Gallery.propTypes = {
  children: PropTypes.node,
};

export default Gallery;
