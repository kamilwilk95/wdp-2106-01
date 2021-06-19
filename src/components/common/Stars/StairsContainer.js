import { connect } from 'react-redux';
import {
  createAction_changeMyStarsChoice,
  createAction_delateMyStarsChoice,
} from '../../../redux/productsRedux';
import Stars from './Stars';

const mapDispatchToProps = dispatch => ({
  changeMyStarsChoice: (data, id) =>
    dispatch(createAction_changeMyStarsChoice(data, id)),
  delateMyStarsChoice: (data, id) =>
    dispatch(createAction_delateMyStarsChoice(data, id)),
});

export default connect(null, mapDispatchToProps)(Stars);
