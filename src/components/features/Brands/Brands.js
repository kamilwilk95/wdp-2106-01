import React from 'react';
import PropTypes from 'prop-types';

import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

class Brands extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgToDisplayDesktop1: 6,
      imgToDisplayDesktop2: 12,
      activePage: 0,
    };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }
  static propTypes = {
    brands: PropTypes.array,
  };
  next(e) {
    e.preventDefault();
    if (this.state.activePage === 0) {
      this.setState({ activePage: this.state.activePage + 1 });
    }
  }
  prev(e) {
    e.preventDefault();
    if (this.state.activePage === 1) {
      this.setState({ activePage: this.state.activePage - 1 });
    }
  }
  render() {
    const { brands } = this.props;
    const images1 = brands.slice(0, this.state.imgToDisplayDesktop1);
    const images2 = brands.slice(6, this.state.imgToDisplayDesktop2);
    return (
      <div className={styles.root}>
        <div className={'container ' + styles.container}>
          <div className='row'>
            <div className='col-1 d-flex justify-content-end align-items-center'>
              <Button variant='small' className={styles.button} onClick={this.prev}>
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
              </Button>
            </div>
            <div className={'col-10 d-flex brandOne ' + styles.imageBox}>
              {this.state.activePage === 0
                ? images1.map(brandData => (
                    <img key={brandData.id} src={brandData.src} alt='brands1' />
                  ))
                : images2.map(brandData => (
                    <img key={brandData.id} src={brandData.src} alt='brands2' />
                  ))}
            </div>
            <div className='col-1 d-flex align-items-center'>
              <Button variant='small' className={styles.button} onClick={this.next}>
                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Brands;
