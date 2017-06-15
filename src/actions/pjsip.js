import { Endpoint } from 'react-native-pjsip';
import { INIT, ACCOUNT_CHANGED, CREATE_ACCOUNT_SUCCESS } from './../constants';

const createAccountSuccess = account => ({
  type: CREATE_ACCOUNT_SUCCESS,
  payload: {
    account,
  },
});

/**
 * Handle account change event.
 *
 * @param {Account} account
 */
export function onAccountChanged(account) {
  return {
    type: ACCOUNT_CHANGED,
    payload: { account },
  };
}

export function init() {
  return async function (dispatch) {
    // Retrieving PjSip service state
    // It is possible that Endpoint instance already have registered accounts and active calls.
    // (because Javascript state is not persistent when User close application, e.g. application
    // goes to background state)
    const endpoint = new Endpoint();
    const state = await endpoint.start();
    const { accounts, calls, settings: endpointSettings, connectivity } = state;

    // Subscribe to endpoint events
    endpoint.on('registration_changed', account => dispatch(onAccountChanged(account)));

    const accountMap = accounts.reduce((acc, cur) => { acc[cur.getId()] = cur; return acc; }, {});
    const callsMap = calls.reduce((acc, cur) => { acc[cur.getId()] = cur; return acc; }, {});
    dispatch({
      type: INIT,
      payload: {
        endpoint,
        endpointSettings,
        connectivity,
        accounts: accountMap,
        calls: callsMap,
      },
    });
  };
}



/**
 * Creates new account based on provided configuration.
 *
 * @param {Object} config
 * @returns {Function}
 */
export function createAccount(config) {
  return async function (dispatch, getState) {
    const { endpoint } = getState().pjsip;
    const account = await endpoint.createAccount({
      ...config,
    });
    dispatch(createAccountSuccess(account));
    return account;
  };
}

/**
 * Initiate new outgoing call.
 *
 * @param {String} destination
 * @param {Account} account
 * @returns {Function}
 */
export function makeCall(destination, account = null) {
    return async function(dispatch, getState) {
        let {accounts} = getState().pjsip;

        // Use "default" account if none provided
        if (account == null) {
            for (let id in accounts) {
                if (accounts.hasOwnProperty(id)) {
                    account = accounts[id];
                    break;
                }
            }
        }

        // -----
        let endpoint = getState().pjsip.endpoint;

        let call = endpoint.makeCall(account, destination);
    };
}
