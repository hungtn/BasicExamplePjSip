import AccountsScreen from './screens/accounts';
import AccountScreen from './screens/account';
import { ACCOUNTS, ACCOUNT } from './constants/routes';


const routeConfigs = {
  [ACCOUNTS]: { screen: AccountsScreen },
  [ACCOUNT]: { screen: AccountScreen },
};

export default routeConfigs;
