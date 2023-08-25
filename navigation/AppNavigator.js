import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeScreen from "../screens/RecipeScreen";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}
      >
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="RecipeList" component={RecipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator