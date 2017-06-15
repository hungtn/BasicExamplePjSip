import { combineReducers } from 'redux';

import pjsip from './pjsip';
import navigation from './navigation';

const rootReducer = combineReducers({
  pjsip,
  navigation,
});

export default rootReducer;
