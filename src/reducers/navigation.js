import { AppNavigator } from './../navigators/AppNavigator';
import * as fromRoutes from './../routes';

/*
Navigation state has structure
{
  index: // identifies which route in the routes array is active
  routes:[
    {
      // Each route needs a name, which routers will use to associate each route
      // with a react component
      routeName: 'MyRouteName',
      key: 'myroute-123'  // Unique id
      ...customRouteData  // Additional data
    },
    ...moreRoutes,
  ]
}
*/

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams(fromRoutes.ACCOUNTS)
);

const navigation = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default navigation;
