import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen }
});

export default createAppContainer(AppNavigator);