import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import BoardScreen from './boards/BoardScreen';
import BoardDetail from './boards/BoardDetail';
import AddBoard from './boards/AddBoard';
import EditBoard from './boards/EditBoard';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
  Board: BoardScreen,
  BoardDetails: BoardDetail,
  AddBoard: AddBoard,
  EditBoard: EditBoard,
});

export default createAppContainer(AppNavigator);