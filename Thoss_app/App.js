import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from './components/MainScreen';




const Stack = createStackNavigator(
  
);



export default function App() {
  return(

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );}


