import { connect } from 'react-redux';

import Stars from './Stars';

import { getAll } from '../../../redux/galleryRedux.js';

const mapStateToProps = state => ({
  gallery: getAll(state),
});

export default connect(mapStateToProps)(Stars);
