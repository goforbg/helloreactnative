import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComponentsScreen from './screens/componentsscreen';
import CounterScreen from './screens/counterscreen';
import HomeScreen from './screens/homescreen';
import ImageScreen from './screens/imagescreen';
import ListScreen from './screens/listscreen';
import ColorsScreen from './screens/colorsscreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Components: ComponentsScreen,
    ImageScreen: ImageScreen,
    CounterScreen: CounterScreen,
    ColorsScreen: ColorsScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Hello React Native"
    }
  }
);

export default createAppContainer(navigator);