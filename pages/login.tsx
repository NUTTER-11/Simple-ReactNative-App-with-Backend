/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {SafeAreaView,StyleSheet,Text,useColorScheme,View,TextInput,Button,Alert,} from 'react-native';


import { Colors } from 'react-native/Libraries/NewAppScreen';

function Login({ navigation }: any): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    
  };

  const handleChangeText = (setter: React.Dispatch<React.SetStateAction<string>>) => (text: string) => {
    setter(text);
  };

  return (
    
    <SafeAreaView style={{...backgroundStyle, flex: 1}}>
  
      <Text style={styles.title}>Log-In</Text>

      
      <View style={styles.inputFieldContainer}>     
      
        <Text style={styles.inputLabel}>Enter your E-mail</Text>
        <TextInput 
        style={styles.inputBox}         
        value={email}
        onChangeText={handleChangeText(setEmail)}/>

        
        <Text style={styles.inputLabel}>Enter your Password</Text>
        <TextInput style={styles.inputBox}                
        value={password}
        onChangeText={handleChangeText(setPassword)}/>
    
      </View>

    <View style={styles.fixToText}>
    <Button
        title="Submit"
        color="blue"
        
        onPress={() => Alert.alert('You want to submit the details')}
      />
    </View>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 60,
  },
  inputFieldContainer: {
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    marginTop: 25,
    padding: 10,
  },
  inputLabel: {
    color: 'white',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    color: 'black',
    backgroundColor: 'white', 
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign:'center',
    
  },

});

export default Login;
