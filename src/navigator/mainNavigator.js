import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile86352Navigator from '../features/UserProfile86352/navigator';
import Maps86333Navigator from '../features/Maps86333/navigator';
import Settings86311Navigator from '../features/Settings86311/navigator';
import Settings86296Navigator from '../features/Settings86296/navigator';
import NotificationList86295Navigator from '../features/NotificationList86295/navigator';
import Maps86294Navigator from '../features/Maps86294/navigator';
import UserProfile86284Navigator from '../features/UserProfile86284/navigator';
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
UserProfile86352: { screen: UserProfile86352Navigator },
Maps86333: { screen: Maps86333Navigator },
Settings86311: { screen: Settings86311Navigator },
Settings86296: { screen: Settings86296Navigator },
NotificationList86295: { screen: NotificationList86295Navigator },
Maps86294: { screen: Maps86294Navigator },
UserProfile86284: { screen: UserProfile86284Navigator },
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
