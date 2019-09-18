import { connect } from 'react-redux';
import CounterDisplay from './CounterDisplay';

function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(mapStateToProps)(CounterDisplay);
