import React from 'react'
import {View,Text,StyleSheet,FlatList} from 'react-native'



const FlatListTry = () =>{
const Arr  = [ {name:"hamza",index:"1"},{name:"ali",index:"2"},{name:"raza",index:"3"},{name:"haron",index:"4"},{name:"qasim",index:"5"},{name:"hashir",index:"6"}]
    return (
        <FlatList
        style={styles.ListStyle} 
        data = {Arr}
        horizontal
        
        // inverted                    inverted use for reverse of list and start list end
        // inverted

        // numColumns={}               divide the list into columns

        showsHorizontalScrollIndicator={false}
        keyExtractor={(key)=>{
          return key.index;
        }}
        renderItem={(element)=>{

            // console.log(element)key={element.index}
             return (
                 <Text keys={element.index}  style = {styles.textStyle}>{element.item.name}</Text>
             );
        }} />
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
export default FlatListTry;