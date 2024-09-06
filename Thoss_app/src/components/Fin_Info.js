import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useFonts } from "expo-font"




export const FinanceCard = (props) => {

    const [value, setValue] = useState(1000000000);

    const [fontsLoaded, error] = useFonts({
        "Nanum": require("../assets/fonts/NanumGothicExtraBold.otf"),
        });
        if (!fontsLoaded) return () => {console.log("Fonts Error")};

var button_con = null
    if (props.ButtonName != null) {
        button_con = 
        <TouchableOpacity>
            <View style={card_style.Button_Style}>
                <Text style={card_style.Button_Text_Style}>{props.ButtonName}</Text>
            </View>
        </TouchableOpacity>
    }



    return (
        <View style={card_style.container}>
            <View style={card_style.TextField}>
                <View style={card_style.IconField}>
                    <View style={card_style.IconFrame}>
                    </View>
                </View>
                <View style={card_style.ValueField}>
                    <Text style={card_style.AccountName}>{props.AccountName}</Text>
                    <Text 
                        style={[card_style.Money, {fontFamily:"Nanum"}]}
                    >{value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Text>
                </View>
            </View>
            <View style={card_style.ButtonField}>
                {button_con}
            </View>
        </View>
    )
}

const card_style = StyleSheet.create({
    container:{
        paddingVertical:13,
        // borderColor:'red',
        // borderWidth:1,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    TextField: {
        flex:7,
        flexDirection:'row',
        // borderColor:'blue',
        // borderWidth:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        height:'auto'
    },

    IconField: {
        padding:5

    },
    IconFrame: {
        borderColor:'black',
        borderWidth:1,
        borderRadius:'50%',
        height:40,
        width:40,
    },
    ValueField:{
        paddingLeft:8,
        // borderColor:'black',
        // borderWidth:1,
        flex:1,
        flexDirection:'column',
        // height:'100%',
    },
    AccountName: {
        fontWeight:'600',
        color: '#5f5f5f'
    },
    Money: {

        fontWeight: '800',
        fontSize:18,
        paddingTop:8,
    },
    ButtonField:{
        flex:2,
        justifyContent: 'center',
        alignItems:'center'
    },
    Button_Style: {
        borderRadius:'5%',
        width:50,
        height:30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#eeeeee'
    },
    Button_Text_Style: {
        fontWeight:'600'

    }
})
