import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, Header } from "@react-navigation/stack";
import MainScreen from './screen/MainScreen';




const Stack = createStackNavigator(
  
);



export default function App() {
  return(

    <NavigationContainer >
      
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={MainScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );}


