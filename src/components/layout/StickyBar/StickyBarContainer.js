import { connect } from 'react-redux';
import {
  createAction_changeAddToCompareValue,
  getNew,
} from '../../../redux/productsRedux.js';
import StickyBar from './StickyBar.js';

const mapStateToProps = state => ({
  products: getNew(state),
});

const mapDispatchToProps = dispatch => ({
  setAddToCompareValue: (id, value) =>
    dispatch(createAction_changeAddToCompareValue(id, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StickyBar);
