import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Header } from "react-native-elements"; // Import the Header component

import Home from "./screens/Home";
import Onboard from "./screens/Auth/Onboard";
import LoginScreen from "./screens/Auth/LoginScreen";
import RegisterScreen from "./screens/Auth/RegisterScreen";
import DeviceConnection from "./screens/Connection/DeviceConnection";
import { DataProvider } from "./contexts/DataContext";
import { HeartRateProvider } from "./contexts/HeartRateContext";
import Enquiry from "./screens/Enquiry";
import UserDetails from "./screens/UserDetails";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <DataProvider>
        <HeartRateProvider>
          <Stack.Navigator initialRouteName="RegisterScreen">
            {/* <Stack.Screen
              name="Onboard"
              component={Onboard}
              options={{ headerShown: false }}
            /> */}
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Enquiry"
              component={Enquiry}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UserDetails"
              component={UserDetails}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </HeartRateProvider>
      </DataProvider>
    </NavigationContainer>
  );
}
