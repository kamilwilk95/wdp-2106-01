import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './LatestBlog.module.scss';
import Carousel from 'react-elastic-carousel';
import Button from '../../common/Button/Button';
import { faCalendarAlt, faComments } from '@fortawesome/free-solid-svg-icons';

const LatestBlog = ({ blog }) => (
  <div className={styles.root}>
    <div className='container pb-3 carousel'>
      <div className='row'>
        <div className={'col-12'}>
          <div className='row no-gutters align-items-end line'>
            <div className={'col-12 col-md-auto ' + styles.heading}>
              <h3>LatestBlog</h3>
            </div>
          </div>
          <div className='row justify-content-center'>
            <Carousel>
              {blog.map(blogData => (
                <div key={blogData.id} className={'d-flex ' + styles.blog}>
                  <div className={'col-4 ' + styles.box}>
                    <div className={styles.innerBox}>
                      <div className={styles.spanBox}>
                        <span>
                          <FontAwesomeIcon
                            className={styles.icon}
                            icon={faCalendarAlt}
                          ></FontAwesomeIcon>{' '}
                          {blogData.date}
                        </span>
                        <span>
                          <FontAwesomeIcon
                            className={styles.icon}
                            icon={faComments}
                          ></FontAwesomeIcon>
                          {blogData.comments}
                        </span>
                      </div>
                      <p>{blogData.name}</p>
                      <p>{blogData.text}</p>
                      <div className={styles.divButton}>
                        <Button variant='small' className={styles.button}>
                          Read more
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className={'col-4 ' + styles.box}>
                    <div className={styles.innerBox}>
                      <div className={styles.spanBox}>
                        <span>
                          <FontAwesomeIcon
                            className={styles.icon}
                            icon={faCalendarAlt}
                          ></FontAwesomeIcon>{' '}
                          {blogData.date}
                        </span>
                        <span>
                          <FontAwesomeIcon
                            className={styles.icon}
                            icon={faComments}
                          ></FontAwesomeIcon>
                          {blogData.comments}
                        </span>
                      </div>
                      <p>{blogData.name}</p>
                      <p>{blogData.text}</p>
                      <div className={styles.divButton}>
                        <Button variant='small' className={styles.button}>
                          Read more
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className={'col-4 ' + styles.box}>
                    <div className={styles.innerBox}>
                      <div className={styles.spanBox}>
                        <span>
                          <FontAwesomeIcon
                            className={styles.icon}
                            icon={faCalendarAlt}
                          ></FontAwesomeIcon>{' '}
                          {blogData.date}
                        </span>
                        <span>
                          <FontAwesomeIcon
                            className={styles.icon}
                            icon={faComments}
                          ></FontAwesomeIcon>
                          {blogData.comments}
                        </span>
                      </div>
                      <p>{blogData.name}</p>
                      <p>{blogData.text}</p>
                      <div className={styles.divButton}>
                        <Button variant='small' className={styles.button}>
                          Read more
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
);

LatestBlog.propTypes = {
  blog: PropTypes.array,
};

export default LatestBlog;
