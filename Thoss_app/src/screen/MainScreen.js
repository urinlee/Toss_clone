import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Component } from 'react';
import { Ionicons } from "@expo/vector-icons"; 
import { useFonts } from "expo-font"

import MainTab from './Tabs/MainTab'
import BenefitTab from './Tabs/BenefitTab'
import PayTab from './Tabs/PayTab'
import StockTab from './Tabs/StockTab'
import AllTab from './Tabs/AllTab'




const Tab = createBottomTabNavigator();


export default function MainScreen(Component) {

    const [fontsLoaded, error] = useFonts({
        "TossFaceFontMac": require("../assets/fonts/TossFaceFontMac.ttf"),
        });
        if (!fontsLoaded) return () => {console.log("Fonts Error")};


    return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarStyle: {
                borderTopLeftRadius: '30',
                borderTopRightRadius: '30'
            },
            tabBarIcon: (color='black', size=25) => {
                let emoji;

                if (route.name === 'Main') {
                emoji = '🏠';
                } else if (route.name === 'Benefit') {
                emoji = '💎';
                } else if (route.name === 'Pay') {
                emoji = '🛍️';
                } else if (route.name === 'Stock') {
                emoji = '📈';
                } else if (route.name === 'All') {
                emoji = '📋';}

                return (
                    <Text style={{ fontSize: size, color: color, fontFamily:'TossFaceFontMac'}}>
                        {emoji}
                    </Text>
                    );
            },
            tabBarLabel: route.name, // 라벨은 route.name으로 설정
            tabBarActiveTintColor: '#e91e63', // 활성화된 탭의 텍스트 색상
            tabBarInactiveTintColor: 'gray',  // 비활성화된 탭의 텍스트 색상
            headerShown: false
            })}>

        
        <Tab.Screen name="Main" component={MainTab}/>
        <Tab.Screen name="Benefit" component={BenefitTab} />
        <Tab.Screen name="Pay" component={PayTab} />
        <Tab.Screen name="Stock" component={StockTab} />
        <Tab.Screen name="All" component={AllTab} />
        </Tab.Navigator>
    );
}
  
  













