import { connect } from 'react-redux';
import {
  createAction_changeArray,
  getSwipeableArrayFromState,
} from '../../../redux/swipeableRedux.js';
import Swipeable from './Swipeable.js';

const mapStateToProps = state => ({
  xd: getSwipeableArrayFromState(state),
});

const mapDispatchToProps = dispatch => ({
  changeArray: data => dispatch(createAction_changeArray(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Swipeable);
