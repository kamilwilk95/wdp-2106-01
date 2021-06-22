import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel';
import '../../../styles/global.scss';

function Swipeable(props) {
  return (
    <div className='swiper  pb-3 '>
      <Carousel
        itemsToShow={1}
        initialActiveIndex={0}
        onNextEnd={pageIndex => props.rightAction(pageIndex)}
        onPrevEnd={pageIndex => props.rightAction(pageIndex)}
      >
        {props.children.map(child => (
          <div key={child.key} className={props.containerClassName}>
            {child}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

Swipeable.propTypes = {
  rightAction: PropTypes.func,
  leftAction: PropTypes.func,
  children: PropTypes.node,
  containerClassName: PropTypes.string,
};

export default Swipeable;
