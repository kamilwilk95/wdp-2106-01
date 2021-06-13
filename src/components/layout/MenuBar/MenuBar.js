import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => {
  const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle(styles.showMenu);
  };
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-xs-12 col-md-12 order-sm-2 col-lg-6 order-lg-1 d-sm-flex justify-content-sm-center'>
            <ProductSearch />
            <FontAwesomeIcon
              className={'d-sm-none ' + styles.icon}
              icon={faBars}
              onClick={toggleMenu}
            />
          </div>
          <div
            className={'col-md-12 order-sm-1 col-lg-6 order-lg-2 menu ' + styles.menu}
          >
            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>Furniture</a>
              </li>
              <li>
                <a href='#'>Chair</a>
              </li>
              <li>
                <a href='#'>Table</a>
              </li>
              <li>
                <a href='#'>Sofa</a>
              </li>
              <li>
                <a href='#'>Bedroom</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
