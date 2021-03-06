import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Register from "../screens/Register";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Welcome"
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
