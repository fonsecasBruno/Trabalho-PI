import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Chat from "./screens/Chat";
import Login from "./screens/Login";
import Signup from "./screens/Signup"
import Home from "./screens/Home"

const Stack = createStackNavigator();

function ChatStack () {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  )
}

function RootNavigator () {
  return (
    <NavigationContainer>
      <ChatStack />
    </NavigationContainer>
  )
}

export default function App() {
  return <RootNavigator />
}
