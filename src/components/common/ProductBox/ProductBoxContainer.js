import { connect } from 'react-redux';
import {
  createAction_changeFavouriteValue,
  createAction_changeAddToCompareValue,
} from '../../../redux/productsRedux.js';
import ProductBox from './ProductBox.js';

const mapDispatchToProps = dispatch => ({
  setFavouriteValue: (id, value) =>
    dispatch(createAction_changeFavouriteValue(id, value)),
  setaddToCompareValue: (id, value) =>
    dispatch(createAction_changeAddToCompareValue(id, value)),
});

export default connect(null, mapDispatchToProps)(ProductBox);
