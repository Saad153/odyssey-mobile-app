import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import LoginComponent from '../Components/Layouts/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {

  useEffect(() => {
    AsyncStorage.setItem("firstBoot",'false');
  }, [])

  return (
  <View style={styles.container}>
    <Image source={require('../assets/Login.png')} style={styles.img} />
    <View style={{padding:20, flex:2}}>
      <LoginComponent />
    </View>
  </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:3,
    backgroundColor:'#FFFFFF'
  },
  img: {
    flex: 3,
    height:'100%',
    width:'100%',
    resizeMode:'cover',
  }
})