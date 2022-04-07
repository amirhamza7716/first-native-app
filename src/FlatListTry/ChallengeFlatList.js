import React from "react";
import {View,Text,StyleSheet,FlatList } from 'react-native';

const ChallengeFlatList = () =>{
    return(
        (
            <FlatList
            style={styles.ListStyle} 
            data = {Arr}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(key)=>{
              return key.index;
            }}
            renderItem={(element)=>{
    
               
                 return (
                     <Text keys={element.index}  style = {styles.textStyle}>{element.item.name}</Text>
                 );
            }} />
        )
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize:40,
        padding:30,
        backgroundColor:'blue',
        margin:20,
        color:"white",


    },
    ListStyle:{
        textAlign:"center",
        margin:20,
        padding:10,
    }
})

export default ChallengeFlatList;


