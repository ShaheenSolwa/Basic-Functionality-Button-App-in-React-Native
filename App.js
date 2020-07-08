import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewPage from './NewPage';



export default function App() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [logged,setLogged] = useState();
  const login = ( val ) => {
    if (username=="shaheen" && password=="12345"){
      
    }
    else{
      setLogged(val);
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{logged}}</Text>
      <TextInput placeholder="Username" onChangeText={text => setUsername(text)} style={styles.Uinput}></TextInput>
      <TextInput placeholder="Password" onChangeText={text => setPassword(text)} style={styles.Pinput}></TextInput>
      <Button onPress={() => login()} title="LOGIN" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Uinput:{
    padding: 20,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
  },
  Pinput:{
    padding: 20,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderLeftWidth: 2,
  }
});

{/*
  ->Button functionality test
const [name, setName] = useState("solwa");

  const changeName = ( val ) => {
    if (val=="shaheen"){
      setName("solwa")
    }
    else{
      setName("shaheen")
    }
  };
<Text>THIS IS A BUTTON APP TEST FOR FUNCTIONALITY</Text>
      <Text>{name}</Text>
      <Button onPress={()=>changeName(name)} title="PRESS ME" />
    
*/}

{/*
const [logged, setLogged] = useState('Not logged in');

  const changeUser = ( val ) => {
    setUsername(val);
  }
  const changePass = ( val ) => {
    setPassword(val)
  }
  const login = ( val ) => {
    if (username=="shaheen" && password=="12345"){
      setLogged(val);
    }
    else{
      setLogged("Not Logged In!")
    }
  }
*/}