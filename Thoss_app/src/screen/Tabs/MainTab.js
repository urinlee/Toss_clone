import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
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

const RecommendButton = (props) => {
    return (
        <View style={recommend_style.MainRecommendButtonContainer}>
            <TouchableOpacity style={recommend_style.MainRecommendButton}>
                <View style={recommend_style.MainRecommendTitleContainer}>
                    <Text style={recommend_style.MainRecommendTitle}>{props.title}</Text>
                </View>
                <View style={recommend_style.MainRecommendIconContainer}>
                    <Text style={recommend_style.MainRecommendIcon}>{props.icon}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const SubRecommendButton = (props) => {
    return (
        <View style={recommend_style.SubRecommendButtonContainer}>
            <TouchableOpacity style={recommend_style.SubRecommendButton}>
                <View style={{flex:1.2}}>
                    <Text style={recommend_style.SubRecommendIcon}>{props.icon}</Text>
                </View>
                <View style={{flex:8}}>
                    <Text style={recommend_style.SubRecommendTitle}>
                        {props.title}
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={recommend_style.SubRecommendTitle}>
                        <MaterialIcons style={asset_style.button_arrow_icon} name="arrow-forward-ios" size={15} color="#c8c8c8" />
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}



const Recommend = () => {

    const [fontsLoaded, error] = useFonts({
        "TossFaceFontMac": require("../../assets/fonts/TossFaceFontMac.ttf"),
        });
        if (!fontsLoaded) return () => {console.log("Fonts Error")};

    return (
        <View style={asset_style.container}>
            <View style={asset_style.card}>
                <View style={[asset_style.title_container, {flexDirection:"column", flex:2}]}>
                    <Text style={recommend_style.Date}> 9월 1일 일요일</Text>
                    <Text style={recommend_style.title}>이우린님을 위해 준비했어요</Text>
                </View>
                <View style={recommend_style.MainRecommendContainer}>
                    <RecommendButton title="토스 브랜드콘" icon="🎟️"></RecommendButton>
                    <RecommendButton title="우리 학교     급식표 보기" icon="🍚"></RecommendButton>
                </View>
                <View style={recommend_style.SubRecommendContainer}>
                    <SubRecommendButton title="저금통" icon="🐽"></SubRecommendButton>
                    <SubRecommendButton title="우리 학교 시간표 보기" icon="🔖"></SubRecommendButton>
                    <SubRecommendButton title="해냄 저금통" icon="💪🏻"></SubRecommendButton>
                </View>
                <TouchableOpacity style={recommend_style.MoreInfo}>
                    <Text style={recommend_style.InfoText}>추천 서비스 더보기 <MaterialIcons style={asset_style.button_arrow_icon} name="arrow-forward-ios" size={15} color="#c8c8c8" /></Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

const recommend_style = StyleSheet.create({
    Date: {

    },
    title: {
        fontWeight:'600',
        fontSize:16

    },
    MainRecommendContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical:8

    },
    MainRecommendButtonContainer: {
        flex:1,
        height:70,
        padding:2,
    },
    MainRecommendButton: {
        flexDirection:'row',
        borderRadius:10,
        backgroundColor:'#f2f4f6',
        padding:13,
        height:'100%'

        

    },
    MainRecommendTitleContainer: {
        flex:7
    },
    MainRecommendIconContainer: {
        flex:3,
        alignItems:'center'
    },
    MainRecommendTitle: {
        paddingRight:5,
        fontWeight:'600',
        fontSize:14.5
    },
    MainRecommendIcon: {
        fontSize:20,
        fontFamily: 'TossFaceFontMac'
    },
    SubRecommendContainer: {
    },
    SubRecommendButtonContainer: {
        paddingVertical:13,
    },
    SubRecommendButton: {
        flexDirection:'row',
        alignItems:'center',
    },
    SubRecommendIcon: {
        fontSize:20,
        fontFamily: 'TossFaceFontMac'
    },
    SubRecommendTitle: {
        color:'#4f4f4f',
        fontSize:16,
        fontWeight:'600',
    },
    MoreInfo: {
        height:50,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    InfoText: {
        fontWeight:'600',
        color:"#808080"
    }
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
                    <View style={style.etcArea}>
                        <TouchableOpacity style={style.Button_Style}>
                            <Ionicons name="settings-sharp" size={20} color="#5f5f5f" />
                            <Text style={style.Button_Text}> 화면 설정</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.Button_Style}>
                            <AntDesign name="plus" size={20} color="#5f5f5f" />
                            <Text style={style.Button_Text}> 계좌 추가</Text>
                        </TouchableOpacity>
                        
                    </View>
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
    },
    etcArea: {
        height: 180,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'flex-start',
        paddingVertical:45

    },
    Button_Style:{
        borderRadius:18,
        backgroundColor:'#e1e1e1',
        height: 50,
        width:130,
        margin:4,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row'
    },
    Button_Text: {
        fontSize:14,
        fontWeight:'600',
        color:"#5f5f5f"
    }
});



export default MainTab;