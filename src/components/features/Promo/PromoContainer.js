import { connect } from 'react-redux';
import Promo from './Promo';
import { getPromo, getDeals } from '../../../redux/promoRedux';

const mapStateToProps = state => ({
  promo: getPromo(state),
  deals: getDeals(state),
});

export default connect(mapStateToProps)(Promo);
