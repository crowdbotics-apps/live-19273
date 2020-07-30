import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial86283Navigator from '../features/Tutorial86283/navigator';
import NotificationList86255Navigator from '../features/NotificationList86255/navigator';
import Settings86254Navigator from '../features/Settings86254/navigator';
import Settings86246Navigator from '../features/Settings86246/navigator';
import UserProfile86244Navigator from '../features/UserProfile86244/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial86283: { screen: Tutorial86283Navigator },
NotificationList86255: { screen: NotificationList86255Navigator },
Settings86254: { screen: Settings86254Navigator },
Settings86246: { screen: Settings86246Navigator },
UserProfile86244: { screen: UserProfile86244Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
