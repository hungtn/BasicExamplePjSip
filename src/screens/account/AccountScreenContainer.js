import { connect } from 'react-redux';
import AccountScreen from './AccountScreen';
import { createAccount } from './../../actions/pjsip';

const mapDispatchToProps = dispatch => ({
  onCreateAccount: config => dispatch(createAccount(config)),
});

export default connect(null, mapDispatchToProps)(AccountScreen);
