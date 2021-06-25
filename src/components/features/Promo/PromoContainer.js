import { connect } from 'react-redux';
import Promo from './Promo';
import { getPromo } from '../../../redux/promoRedux';

const mapStateToProps = state => ({
  promo: getPromo(state),
});

export default connect(mapStateToProps)(Promo);
