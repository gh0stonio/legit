import { connect } from 'react-redux';
import { alertSomething } from '../actions';
import Main from '../components/Main';

export default connect(
  function mapStateToProps (state) {
    return {};
  },
  function mapDispatchToProps (dispatch) {
    return {
      onClick: () => dispatch(alertSomething())
    };
  }
)(Main);
