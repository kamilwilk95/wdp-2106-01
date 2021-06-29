import { connect } from 'react-redux';
import MainLayout from './MainLayout';
import { getMode } from '../../../redux/modeRedux';
import { createActionChangeMode } from '../../../redux/modeRedux';

const mapStateToProps = state => ({
  mode: getMode(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  changeMode: mode =>
    dispatch(
      createActionChangeMode({
        mode,
      })
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
