import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import routeConfigs from './../routes';

// Navigator used to initialize the navigation reducer
export const AppNavigator = StackNavigator(routeConfigs);

// pass complete navigation prop to top-level Navigator
// it now has no control over it's internal state (no navigation container)
const AppWithNavigationState = ({ dispatch, navigation }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: navigation })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  navigation: state.navigation,
});

export default connect(mapStateToProps)(AppWithNavigationState);
