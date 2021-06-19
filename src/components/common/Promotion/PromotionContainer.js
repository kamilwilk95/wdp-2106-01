import { connect } from 'react-redux';

import Promotion from './Promotion';

import { getAll } from '../../../redux/galleryRedux.js';

const mapStateToProps = state => ({
  promo: getAll(state),
});

export default connect(mapStateToProps)(Promotion);
