import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import PropTypes from 'prop-types';

function Swipeable(props) {
  const [index, setIndex] = useState(0);
  const handleAddValue = () => {
    const newValue = index + 1;
    setIndex(newValue);
    return index + 1;
  };
  const handleDelateValue = () => {
    const newValue = index - 1;
    setIndex(newValue);
    return index - 1;
  };
  return (
    <div>
      <Swiper
        observer={true}
        observeParents={true}
        onSlideNextTransitionEnd={() => props.parentCallback(handleAddValue())}
        onSlidePrevTransitionEnd={() => props.parentCallback(handleDelateValue())}
      >
        {props.children.map(child => (
          <SwiperSlide key={child.key} className={props.containerClassName}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

Swipeable.propTypes = {
  parentCallback: PropTypes.func,
  children: PropTypes.node,
  containerClassName: PropTypes.string,
};

export default Swipeable;
