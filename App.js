import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// import ComponentsScreen from "./screens/componentsscreen";
// import CounterScreen from "./screens/counterscreen";
import HomeScreen from "./screens/homescreen";
// import ImageScreen from "./screens/imagescreen";
// import ListScreen from "./screens/listscreen";
// import ColorsScreen from "./screens/colorsscreen";
// import SquareScreen from "./screens/SquareScreen";
// import SquareScreenReducer from "./screens/SquareScreenReducer";
// import TextInputScreen from "./screens/textinputscreen";
// import BoxScreen from "./screens/boxscreen";
import RickAndMortyScreen from "./screens/rickandmortyscreen";
import ResultShowScreen from "./components/ResultShowScreen";
let debug = require("debug");
debug.enable("axios");
import React from "react";
import { Provider } from "./context/AppContext";
import BlogIndexScreen from "./screens/BlogIndexScreen";
import BlogDetailScreen from "./screens/BlogDetailScreen";
import CreateBlogPostScreen from "./screens/CreateBlogPostScreen"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    // List: ListScreen,
    // Components: ComponentsScreen,
    // ImageScreen: ImageScreen,
    // CounterScreen: CounterScreen,
    // ColorsScreen: ColorsScreen,
    // SquareScreen: SquareScreen,
    // SquareScreenReducer: SquareScreenReducer,
    // TextInputScreen: TextInputScreen,
    // BoxScreen: BoxScreen,
    RickAndMortyScreen: RickAndMortyScreen,
    ResultShowScreen: ResultShowScreen,
    BlogIndexScreen: BlogIndexScreen,
    BlogDetailScreen: BlogDetailScreen,
    CreateBlogPostScreen, CreateBlogPostScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Hello React Native",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
