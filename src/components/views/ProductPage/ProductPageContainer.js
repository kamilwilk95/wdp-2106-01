import { connect } from 'react-redux';

import ProductPage from './ProductPage';

import { getAll } from '../../../redux/galleryRedux.js';

const mapStateToProps = state => ({
  gallery: getAll(state),
});

export default connect(mapStateToProps)(ProductPage);
