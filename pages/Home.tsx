/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,StyleSheet,Text,useColorScheme,View,Button,
} from 'react-native';


import { Colors } from 'react-native/Libraries/NewAppScreen';
import MyComponent from '../screens/bottomnav';

function Home({ navigation }: any): React.JSX.Element {
 const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      };
    
  return (
    
<SafeAreaView style={{...backgroundStyle,flex:1}}>
        <MyComponent></MyComponent>
        </SafeAreaView>
  
  );
}


const styles = StyleSheet.create({
       orientation1:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 'auto',
        marginBottom: 'auto',
  }
});

export default Home;
