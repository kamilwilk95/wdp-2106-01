import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductPage.module.scss';

import Stars from '../../common/Stars/Stars';

import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { IoMdResize } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { FaExchangeAlt } from 'react-icons/fa';
import { BiBasket } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { SiYahoo } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';

const ProductPage = ({ gallery }) => (
  <div className={styles.root}>
    <div className={styles.grayRectangle}>
      <div className='container'>
        <div className={styles.topBar}>
          <h3>Furniture</h3>
          <p>Home &gt; Furniture &gt; Chair</p>
        </div>
        <div className={styles.productDescription}>
          <div className={styles.gallery}>
            <div className={styles.image}>
              <img
                src='https://i.ibb.co/Kw9mJ44/pexels-martin-p-chy-1866149-1.jpg'
                alt='product'
              />
              <IoMdResize className={styles.icon} />
            </div>
            <div className={styles.slider}>
              <button className={styles.sliderBtnLeft}>
                <AiOutlineLeft className={styles.icon} />
              </button>
              {gallery.advImgs.map(photo => (
                <div className={styles.slide} key={photo.id}>
                  {/* <div className={styles.slide}> */}
                  <img
                    className={photo.active ? '' : ' ' + styles.inactive}
                    src={photo.pic}
                    alt={'furniture-sale-' + photo.id}
                  />
                  {/* </div> */}
                </div>
              ))}
              <button className={styles.sliderBtnRight}>
                <AiOutlineRight className={styles.icon} />
              </button>
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.btns}>
              <button>
                <AiOutlineLeft className={styles.icon} />
              </button>
              <button>
                <AiOutlineRight className={styles.icon} />
              </button>
            </div>
            <div className={styles.header}>
              <h3>Sunday Magic Bear Sofa</h3>
              <div className={styles.rating}>
                <Stars />
                <p>(0 viewers) Add your review</p>
              </div>
            </div>
            <div className={styles.price}>
              <p>$350.00</p>
              <p>$250.00</p>
            </div>
            <div className={styles.buttons}>
              <div className={styles.row1}>
                <button>
                  <BiBasket /> ADD TO CART
                </button>
                <AiOutlineHeart className={styles.button} />
                <AiOutlineMail className={styles.button} />
                <FaExchangeAlt className={styles.button} />
              </div>
              <div className={styles.row2}>
                <p>Quantity:</p>
                <input type='text'></input>
                <button className={styles.button}>+</button>
                <button className={styles.button}>-</button>
              </div>
            </div>
            <div className={styles.text}>
              <h4>Quick overview</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className={styles.avabilability}>
              <p>
                <span>Avabilability:</span> in Stock
              </p>
              <p>
                <span>Category:</span>Furniture
              </p>
            </div>
            <div className={styles.socialMedia}>
              <button>
                <FaFacebookF className={styles.iconf} />
                <p>Share</p>
              </button>
              <button>
                <AiFillGoogleCircle className={styles.icong} />
                <p>Google+</p>
              </button>
              <button>
                <SiYahoo className={styles.icony} />
                <p>Yahoo</p>
              </button>
              <button>
                <FaLinkedinIn className={styles.iconl} />
                <p>Linked In</p>
              </button>
              <button>
                <FaPinterestP className={styles.iconp} />
                <p>Pinterest</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ProductPage.propTypes = {
  gallery: PropTypes.object,
};

export default ProductPage;
