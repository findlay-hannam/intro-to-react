import { connect } from 'react-redux';
import fetchPhotos from './actions/fetchPhotos';
import ApiList from './ApiList';

function mapStateToProps(state) {
  return { data: state.photos };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchPhotos()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiList);