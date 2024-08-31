import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from "expo-font"
import { FinanceCard } from "../../components/Fin_Info"


const TopNav = () => {
    return(
        <View style={style.nav}>
            <Image 
                style={style.nav_logo}
                source={require('../../assets/image/Toss_Logo_Secondary_Gray.png')}></Image>
            <TouchableOpacity style={style.nav_notify_container}>
                <MaterialCommunityIcons name="bell" size={30} color="#3f3f3f" />
            </TouchableOpacity>
        </View>
    )
}


const Asset_container = (props) => {

    const make_button = props.is_button ? 0.1 : 1

    return(
        <View style={asset_style.container}>
            <View style={asset_style.card}>
                <TouchableOpacity style={asset_style.title_container} activeOpacity={make_button}>
                    <Text style={[asset_style.title]}>{props.title}</Text>
                    <View style={asset_style.button_arrow}>
                        {props.is_button ? (<MaterialIcons style={asset_style.button_arrow_icon} name="arrow-forward-ios" size={20} color="gray" />) : null}
                        
                    </View>
                </TouchableOpacity>
                {props.children}
            </View>
        </View>
    )
}

Asset_container.defaultProps = {
    is_button: false
};


const asset_style = StyleSheet.create({
    container: {
        paddingVertical:8,
        paddingHorizontal:20,
    },
    title: {
        fontSize:'23px',
        fontWeight:'900',
    },
    card: {
        padding:18,
        borderRadius:15,
        backgroundColor:'white'
    },
    title_container: {
        paddingHorizontal:5,
        paddingVertical:8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    button_arrow: {
        height:'auto',
        justifyContent:'center',
    },
    
})

const RecommendButton = (title, icon) => {
    return (
        <TouchableOpacity style={recommend_style.MainRecommendButton}>
            <View style={{flex:7}}>
                <Text></Text>
            </View>
            <View style={{flex:3}}>
                
            </View>
        </TouchableOpacity>
    )
}

const SubRecommendButton = (title, icon) => {
    return (
        <TouchableOpacity>
            <View style={{flex:1}}>
            </View>
            <View style={{flex:9}}>
                <Text>
                    HelloWorld
                </Text>
            </View>
        </TouchableOpacity>
    )
}



const Recommend = () => {
    return (
        <View style={asset_style.container}>
            <View style={asset_style.card}>
                <View style={[asset_style.title_container, {flexDirection:"column"}]}>
                    <Text> 9월 1일 일요일</Text>
                    <Text>OOO님을 위해 준비했어요</Text>
                </View>
                <View style={recommend_style.MainRecommendButtonContainer}>
                    <RecommendButton></RecommendButton>
                </View>
                <View style={recommend_style.SubRecommendButtonContainer}>
                    <SubRecommendButton></SubRecommendButton>
                </View>
            </View>
        </View>
    )
}

const recommend_style = StyleSheet.create({
    Date: {

    },
    title: {

    },
    MainRecommendButtonContainer: {

    },
    MainRecommendButton: {

    },
    SubRecommendButtonContainer: {

    },
    SubRecommendButton: {

    },
})







 
function MainTab(Component) {
    return (
        <View style={style.container}>
            <SafeAreaView>
                <TopNav></TopNav>
                <ScrollView>
                    <Asset_container title="토스뱅크" is_button={true}></Asset_container>
                    <Asset_container title="계좌" is_button={true}>
                        <FinanceCard AccountName="토스뱅크" ButtonName="송금"></FinanceCard>
                        <FinanceCard AccountName="포인트 머니 1개"></FinanceCard>
                    </Asset_container>
                    <Asset_container title="토스머니" is_button={true}>
                        <FinanceCard AccountName="토스뱅크" ButtonName="송금"></FinanceCard>
                        <FinanceCard AccountName="포인트 머니 1개"></FinanceCard>
                    </Asset_container>
                    <Asset_container title="교통카드" is_button={true}>
                        <FinanceCard AccountName="토스뱅크" ButtonName="송금"></FinanceCard>
                    </Asset_container>
                    <Asset_container title="소비" is_button={true}>
                        <FinanceCard AccountName="토스뱅크" ButtonName="송금"></FinanceCard>
                    </Asset_container>
                    <Recommend></Recommend>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
    
}

 
const style = StyleSheet.create({
    container: {
        backgroundColor:'#f2f4f6',
        flex:1,
        justifyContent: 'top',
    },
    nav:{
        paddingHorizontal:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50

    },
    nav_logo:{
        width:100,
        height:'auto',
        resizeMode:'contain',
        transform: [{scale:1.5}]

    },
    nav_notify_container:{
        justifyContent: 'center',
    }
});



export default MainTab;