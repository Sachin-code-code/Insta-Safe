import React from "react";
import Homepage from "./Screens/Homepage";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Afterlogin from "./Screens/Afterlogin";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; 



const Stack=createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homepage" component={Homepage}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Afterlogin" component={Afterlogin}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

