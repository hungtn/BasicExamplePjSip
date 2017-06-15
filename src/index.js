import React from 'react';
import * as PjSip from './actions/pjsip';
import Root from './components/Root';
import rootReducer from './reducers';
import configureStore from './configureStore';

const store = configureStore(rootReducer);

try {
  store.dispatch(PjSip.init());
} catch (e) {
  console.log(e);
}

const AppComponent = () => <Root store={store} />;

export default AppComponent;
