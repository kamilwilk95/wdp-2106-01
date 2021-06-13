import React from 'react';
import styles from './Swipeable.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons';

class Swipeable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      disabledNext: false,
      disabledPrev: true,
    };
    this.z = 0;
  }

  checkOfValues() {
    for (let i of this.props.profiles) {
      if (Object.values(i).includes(this.props.currentValue) === true) {
        //console.log(this.z);
      }
      this.z = this.z + 1;
    }
  }

  togglePrev(e) {
    this.checkOfValues();
    let index = this.state.index - 1;
    let disabledPrev = index === 0;
    this.setState({ index: index, disabledPrev: disabledPrev, disabledNext: false });
    this.props.parentCallback(this.props.profiles[index].id);
  }

  toggleNext(e) {
    this.checkOfValues();
    let index = this.state.index + 1;
    let disabledNext = index === this.props.profiles.length - 1;
    this.setState({ index: index, disabledNext: disabledNext, disabledPrev: false });
    this.props.parentCallback(this.props.profiles[index].id);
  }

  render() {
    const { index, disabledNext, disabledPrev } = this.state;
    const profile = this.props.profiles ? this.props.profiles[index] : null;
    if (this.props.currentValue !== undefined) {
      //console.log(this.props.currentValue)
    }

    if (profile) {
      return (
        <div className={styles.switchContainer}>
          <button onClick={e => this.togglePrev(e)} disabled={disabledPrev}>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </button>
          {this.props.children}
          <button onClick={e => this.toggleNext(e)} disabled={disabledNext}>
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </button>
          <h1>{profile.name}</h1>
        </div>
      );
    } else {
      return <span>error</span>;
    }
  }
}
Swipeable.propTypes = {
  parentCallback: PropTypes.func,
  profiles: PropTypes.node,
  children: PropTypes.node,
  currentValue: PropTypes.string,
};

export default Swipeable;
