import { connect } from 'react-redux';

import Summary from './Summary';

import { createAction_setActive, getAll } from '../../../redux/tabsRedux.js';

const mapStateToProps = state => ({
  tabs: getAll(state),
});

export default connect(mapStateToProps, null)(Summary);
