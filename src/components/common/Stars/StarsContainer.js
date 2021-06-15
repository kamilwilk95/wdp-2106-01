import { connect } from 'react-redux';

import Gallery from './Stars';

import { getAll } from '../../../redux/galleryRedux.js';

const mapStateToProps = state => ({
  gallery: getAll(state),
});

export default connect(mapStateToProps)(Gallery);
