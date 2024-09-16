import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';


import { Colors } from 'react-native/Libraries/NewAppScreen';

function Signup({ navigation }: any): React.JSX.Element {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleChangeText = (setter: React.Dispatch<React.SetStateAction<string>>) => (text: string) => {
    setter(text);
  };

  const onSubmit = async () => {
    if (!name || !phone || !email || !password || !rePassword) {
      setError('All fields are required.');
      return;
    }
    if (password !== rePassword) {
      setError('Passwords do not match.');
      return;
    }
    setError(null); // Clear any previous errors
  
    try {
      const response = await fetch('http://192.168.1.71:3001/create/new-profile', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: name,
          phone,
          email,
          password,
          re_enter_password: rePassword,
        }),
      });
      if (response.ok) {
        const result = await response.json();
        Alert.alert('Success', result.message || 'User created successfully');
      } else {
        const result = await response.json();
        Alert.alert('Error', result.message || 'Something went wrong');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Network error or server is down.');
    }
  };

  return (
    <SafeAreaView style={{ ...backgroundStyle, flex: 1 }}>
      <Text style={styles.title}>Sign-Up</Text>

      <View style={styles.inputFieldContainer}>
        {error ? <Text style={styles.errorMessage}>{error}</Text> : null}

        <Text style={styles.inputLabel}>Enter your Name</Text>
        <TextInput
          style={styles.inputBox}
          value={name}
          onChangeText={handleChangeText(setName)}
        />

        <Text style={styles.inputLabel}>Enter your Phone Number</Text>
        <TextInput
          style={styles.inputBox}
          value={phone}
          onChangeText={handleChangeText(setPhone)}
        />

        <Text style={styles.inputLabel}>Enter your E-mail</Text>
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={handleChangeText(setEmail)}
        />

        <Text style={styles.inputLabel}>Enter your Password</Text>
        <TextInput
          style={styles.inputBox}
          secureTextEntry
          value={password}
          onChangeText={handleChangeText(setPassword)}
        />

        <Text style={styles.inputLabel}>Re-Enter your Password</Text>
        <TextInput
          style={styles.inputBox}
          secureTextEntry
          value={rePassword}
          onChangeText={handleChangeText(setRePassword)}
        />
      </View>

      <View style={styles.fixToText}>
        <Button
          title="Submit"
          color="blue"
          onPress={() => navigation.navigate('Login')}
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
  errorMessage: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Signup;
