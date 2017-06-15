import { ACCOUNT_CHANGED, INIT, CREATE_ACCOUNT_SUCCESS } from './../constants';

const initialState = {
  endpoint: null,
  endpointSettings: null,
  connectivity: true,
  isScreenLocked: false,

  appState: 'active', // Application state (need to know whether send UNREGISTER for CallKit incoming call)

  accounts: {},
  calls: {},
};

const pjsip = (state = initialState, action) => {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        ...action.payload,
      };
    case CREATE_ACCOUNT_SUCCESS:
    case ACCOUNT_CHANGED: {
      const account = action.payload.account;

      return {
        ...state,
        accounts: {
          ...state.accounts,
          [account.getId()]: account,
        },
      };
    }
    default:
      return state;
  }
};

export default pjsip;
