import { connect } from 'react-redux';

import ProductPage from './ProductPage';

import { createAction_setActive, getAll } from '../../../redux/galleryRedux.js';

const mapStateToProps = state => ({
  gallery: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  setActive: (id, value, category) =>
    dispatch(createAction_setActive(id, value, category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
