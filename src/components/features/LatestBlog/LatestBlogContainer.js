import { connect } from 'react-redux';
import LatestBlog from './LatestBlog';
import { getBlog } from '../../../redux/blogRedux';

const mapStateToProps = state => ({
  blog: getBlog(state),
});

export default connect(mapStateToProps)(LatestBlog);
