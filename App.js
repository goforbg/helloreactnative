import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/homescreen';
import ListScreen from './screens/listscreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Hello React Native"
    }
  }
);

export default createAppContainer(navigator);