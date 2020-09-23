import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList106723Navigator from '../features/ArticleList106723/navigator';
import ArticleList106722Navigator from '../features/ArticleList106722/navigator';
import ArticleList106721Navigator from '../features/ArticleList106721/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList106723: { screen: ArticleList106723Navigator },
ArticleList106722: { screen: ArticleList106722Navigator },
ArticleList106721: { screen: ArticleList106721Navigator },

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
