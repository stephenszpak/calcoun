import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AppNavigator from "./components/AppNavigator";

const SwitchNavigator = createSwitchNavigator(
  {
    App: AppNavigator
  },
  {
    initialRouteName: "App"
  }
);

export default createAppContainer(SwitchNavigator);
