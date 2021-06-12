import React from 'react';
//import styles from './Swipeable.module.scss';
import PropTypes from 'prop-types';

class Swipeable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      disabledNext: false,
      disabledPrev: true,
    };
  }

  togglePrev(e) {
    let index = this.state.index - 1;
    let disabledPrev = index === 0;

    this.setState({ index: index, disabledPrev: disabledPrev, disabledNext: false });
    this.props.parentCallback(this.props.profiles[index].id);
  }

  toggleNext(e) {
    let index = this.state.index + 1;
    let disabledNext = index === this.props.profiles.length - 1;

    this.setState({ index: index, disabledNext: disabledNext, disabledPrev: false });
    this.props.parentCallback(this.props.profiles[index].id);
  }

  render() {
    const { index, disabledNext, disabledPrev } = this.state;
    const profile = this.props.profiles ? this.props.profiles[index] : null;
    if (profile) {
      return (
        <div className='profile'>
          <div>
            <button onClick={e => this.togglePrev(e)} disabled={disabledPrev}>
              Previous
            </button>
            {this.props.children}
            <button onClick={e => this.toggleNext(e)} disabled={disabledNext}>
              Next
            </button>
          </div>
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
};

export default Swipeable;
