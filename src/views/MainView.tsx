import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { menuAtom } from "./utils/menu";
import { createStackNavigator } from "@react-navigation/stack";
import TabsView from "./TabsView";
import AccountView from "./stack/AccountView";
import DinnerView from "./stack/DinnerView";
import * as OptionsViews from "./stack/optionsViews/";
import LoginView from "./LoginView";
import { getWeeklyMenu } from "../api";
import { RootStackParamList } from "../types";

const Stack = createStackNavigator<RootStackParamList>();
const MainView = () => {
  const [menu, setMenu] = useRecoilState(menuAtom);

  useEffect(() => {
    getWeeklyMenu().then((menu) => setMenu(menu));
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="TabsView"
      screenOptions={{
        animationTypeForReplace: "pop",
      }}
    >
      <Stack.Screen name="TabsView" component={TabsView} options={{ headerShown: false }} />
      <Stack.Screen name="Account" component={AccountView} />
      <Stack.Screen name="DinnerView" component={DinnerView} />
      <Stack.Screen name="LoginView" component={LoginView} />
      <Stack.Group>
        <Stack.Screen name="Look and Feel" component={OptionsViews.LookAndFeelView} />
        <Stack.Screen name="Payment Settings" component={OptionsViews.PaymentSettingsView} />
        <Stack.Screen name="Miscellaneous" component={OptionsViews.MiscellaneousOptionsView} />
        <Stack.Screen name="Biometrics and Security" component={OptionsViews.SecurityOptionsView} />
        <Stack.Screen name="Informations" component={OptionsViews.InformationsView} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainView;
