import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


const TopTap = createMaterialTopTabNavigator();
 
export default class MainTab extends Component {
    render() {
        return (
            <TopTap.Navigator>
                <TopTap.Screen name="TEST"/>
                <TopTap.Screen name="TEST2"/>
            </TopTap.Navigator>
            
        );
    }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});