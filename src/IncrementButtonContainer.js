import CounterButton from './IncrementButton';
import { connect } from 'react-redux';
import { incrementCount } from './actions/count';

function mapDispatchToProps(dispatch) {
  return {
    incrementCount: () => dispatch(incrementCount()),
  };
}

export default connect(undefined, mapDispatchToProps)(CounterButton);
