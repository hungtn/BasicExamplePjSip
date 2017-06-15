import { connect } from 'react-redux';
import App from './App';
import { createAccount } from './../actions/pjsip';

const mapDispatchToProps = dispatch => ({
  onCreateAccount: config => dispatch(createAccount(config)),
});

export default connect(null, mapDispatchToProps)(App);
