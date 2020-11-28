import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComponentsScreen from './screens/componentsscreen';
import HomeScreen from './screens/homescreen';
import ImageScreen from './screens/imagescreen';
import ListScreen from './screens/listscreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Components: ComponentsScreen,
    ImageScreen: ImageScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Hello React Native"
    }
  }
);

export default createAppContainer(navigator);