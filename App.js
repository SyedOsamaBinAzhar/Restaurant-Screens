import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { createStackNavigator,createAppContainer } from '@react-navigation/stack';
import SearchScreen from './src/Screens/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const App = () => {
//   return (
//     <View>
//       <Text>ABC</Text>
//     </View>
//   )
// }

// export default App

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

// const navigator = createStackNavigator({
//   Search : SearchScreen
// },
// {
//   initialRouteName: "Search",
//   defaultNavigationOptions : {
//     title : "Business Search"
//   }
// }

// )

// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="ScreenSearch" component={SearchScreen} />
//     </Stack.Navigator>
//   );
// }


// export default createAppContainer(MyStack)
