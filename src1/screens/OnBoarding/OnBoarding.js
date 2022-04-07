import React from 'react';
import {View,Text,SafeAreaView,StyleSheet,Image,Animated} from 'react-native'
import {images,appTheme} from '../../constants/index'

import { 
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic 
  } from '@expo-google-fonts/roboto';
  import { useFonts } from 'expo-font';
  import AppLoading from 'expo-app-loading';

const {COLORS,SIZES} = appTheme;
const onBoardings = [
    {
        title:"lets travling",
        des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  ",
        img:images.on1
    },
    {
        title:"Navigation",
        des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.  ",
        img:images.on2
    },
    {
        title:"Destination",
        des : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ",
        img:images.on3
    }
]

const FONTS ={
    h1:{fontFamily:"Roboto_900Black",fontSize:SIZES.h1,lineHeight:36},
    h2:{fontFamily:"Roboto_700Bold",fontSize:SIZES.h2,lineHeight:30},
    h3:{fontFamily:"Roboto_700Bold",fontSize:SIZES.h3,lineHeight:22},
    h4:{fontFamily:"Roboto_700Bold",fontSize:SIZES.h4,lineHeight:22},
    body1:{fontFamily:"Roboto_400Regular",fontSize:SIZES.body1,lineHeight:36},
    body2:{fontFamily:"Roboto_400Regular",fontSize:SIZES.body2,lineHeight:30},
    body3:{fontFamily:"Roboto_400Regular",fontSize:SIZES.body3,lineHeight:22},
    body4:{fontFamily:"Roboto_400Regular",fontSize:SIZES.body4,lineHeight:22},
    }

const OnBoarding = () =>{
 const scrollX = new Animated.Value(0);

    let [fontsload,errors] = useFonts({
        Roboto_100Thin,
        Roboto_100Thin_Italic,
        Roboto_300Light,
        Roboto_300Light_Italic,
        Roboto_400Regular,
        Roboto_400Regular_Italic,
        Roboto_500Medium,
        Roboto_500Medium_Italic,
        Roboto_700Bold,
        Roboto_700Bold_Italic,
        Roboto_900Black,
        Roboto_900Black_Italic 
    })
    const dotPosition = Animated.divide(scrollX,SIZES.width);

    if(!fontsload){
        return <AppLoading/>
    }
    return (
        <SafeAreaView 
        style={styles.container}
        
        >
        <View>
        <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}

        decelerationRate={0}
        scrollEventThrottle={16}

        onScroll={Animated.event([
            {nativeEvent:{contentOffset:{x:scrollX}}},
            ],{useNativeDriver:false})}
        >
           {
            onBoardings.map((item,index)=>{
               return (
                <View key={index} style={styles.card}>
                {/* image section */}
                    <View style={styles.cardInner}>
                        <Image 
                        source={item.img}
                        resizeMode='cover'
                        style={styles.mainimg}
                        />
                    </View>
                {/* Info section */}
                    <View style={styles.info}>
                        <Text style={styles.info_title}>{item.title}</Text>
                        <Text style={styles.info_des}>{item.des}</Text>
                    </View>
                    
                </View>
               )  
            })
           }
        </Animated.ScrollView>
        </View>

{/* dot animation start */}
        <View>
            <View  style={styles.dotContainer}>
                {
                    onBoardings.map((item,index)=>{

                        const opacity = dotPosition.interpolate({
                            inputRange:[index - 1,index,index +1],
                            outputRange:[0.3,1,0.3],
                            extrapolate:"clamp"
                        })
                        const dotsize = dotPosition.interpolate({
                            inputRange:[index - 1,index,index +1],
                            outputRange:[SIZES.base,17,SIZES.base],
                            extrapolate:"clamp"
                        })
               return (
                <Animated.View 
                key={`dot-${index}`}
                opacity={opacity} 
                style={[styles.dot,{width:dotsize,height:dotsize}]}>
                </Animated.View>
               )  
            }) 
                }
            </View>
        </View>
{/* dot animation End */}

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: appTheme.COLORS.white,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    main:{

    },
    card:{
        width:appTheme.SIZES.width,
        height:appTheme.SIZES.height
    },
    cardInner:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",

    },

    mainimg:{
    width:"100%",
    height:"100%",
    },
    info:{
        position:"absolute",
        bottom:"10%",
        left:40,
        right:40,
    },
    info_title:{

    // fontFamily:"Roboto_900Black",
    // fontSize:SIZES.h1,
    // lineHeight:36,
    ...FONTS.h1,



    color:COLORS.gray,
    textAlign:"center",
    },
    info_des:{
        // fontFamily:"Roboto_400Regular",
        // fontSize:SIZES.body3,
        // lineHeight:22,

        ...FONTS.body3,
        textAlign:"center",
        color:COLORS.gray,
        marginTop:SIZES.base,
    },
    dotContainer:{
        flexDirection:"row",
        padding:SIZES.padding,
        marginBottom:20,
        alignItems:"center",
        justifyContent:"center"
    },
    dot:{
        // width:20,
        // height:20,
        borderRadius:SIZES.radius,
        backgroundColor:COLORS.blue,
        marginHorizontal:SIZES.radius / 2
    }
   
  });

export default  OnBoarding;

