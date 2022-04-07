import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {OnBoarding} from './src1/screens/index'
const App=()=> {
  const Stack = createNativeStackNavigator();
  return (
    // <View style={styles.container}>
    //     <Text>hello</Text>
        
       
    // </View>
    // initialRouteName='OnBoarding'
    <NavigationContainer>
       <Stack.Navigator  >
       <Stack.Screen  name="OnBoarding" component={OnBoarding} options={{headerShown:false}}/>

       </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
 
});


export default App;