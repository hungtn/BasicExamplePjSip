import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import AppWithNavigationState from './../navigators/AppNavigator';

const Root = ({ store }) => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
