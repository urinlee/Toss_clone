import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
export default class BenefitTab extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text>이우린 천재</Text>
            </View>
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