import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { createStackNavigator,createAppContainer } from '@react-navigation/stack';
import SearchScreen from './src/Screens/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Business Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

