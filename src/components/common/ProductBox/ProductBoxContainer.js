import { connect } from 'react-redux';
import { createAction_changeFavouriteValue } from '../../../redux/productsRedux.js';
import ProductBox from './ProductBox.js';

const mapDispatchToProps = dispatch => ({
  setFavouriteValue: value => dispatch(createAction_changeFavouriteValue(value)),
});

export default connect(null, mapDispatchToProps)(ProductBox);
