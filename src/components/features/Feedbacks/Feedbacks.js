import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Feedbacks.module.scss';
import Carousel from 'react-elastic-carousel';

const Feedbacks = ({ feedbacks }) => (
  <div className={styles.root}>
    <div className='container pb-3 carousel'>
      <div className='row'>
        <div className={'col-12'}>
          <div className='row no-gutters align-items-end line'>
            <div className={'col-12 col-md-auto ' + styles.heading}>
              <h3>Client feedback</h3>
            </div>
          </div>
          <div className='row'>
            <FontAwesomeIcon className={styles.icon} icon={faQuoteRight} />
          </div>

          <div className='row justify-content-center feedback'>
            <Carousel>
              {feedbacks.map(feedback => (
                <div div className='col-10 ' key={feedback.id}>
                  <p className='d-block w-100 text-center'>{feedback.text}</p>
                  <div className='row flex-column align-items-center'>
                    <div className='col-3'>
                      <div className='row flex-row align-items-center'>
                        <div className='col-4 flex-grow-1'>
                          <img alt=''></img>
                        </div>
                        <div className='col-13 flex-column d-flex align-items-center'>
                          <span className='col-13 name '>{feedback.name}</span>
                          <span className='col-13'>{feedback.description}</span>
                        </div>
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

Feedbacks.propTypes = {
  feedbacks: PropTypes.array,
  text: PropTypes.string,
};

export default Feedbacks;
