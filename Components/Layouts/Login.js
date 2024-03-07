import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIconsIcons from '@expo/vector-icons/MaterialCommunityIcons';
const bgColor = '#EEEEEE';
import delay from "../../functions/delay"
import { router } from 'expo-router';

const LoginComponent = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [load, setLoad] = useState(false);
    const [invalid, setInvalid] = useState(false);

    const handleSubmit = async() => {
        setLoad(true);
        // await delay(1000);
        if(email=="" && pass==""){
            router.replace("/dashboard")
        } else {
            setInvalid(true);
        }
        setLoad(false);
    }

  return (
    <View>
        <Text style={styles.blackTxt}>Log In</Text>
        {!invalid && <Text style={styles.gretTxt}>Enter your Email & Password to Login</Text>}
        {(invalid && !load) && <Text style={styles.redTxt}>Wrong Email or Password!</Text>}
        <View style={styles.divider}></View>
        <View style={{flexDirection:'row', width:'100%', marginTop:5}}>
            <View style={styles.greyContainer}>
                <View style={{width:'100%', paddingLeft:5, paddingTop:1}}>
                <TextInput 
                    autoFocus={true} 
                    style={[styles.input, {padding:10}]}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Enter Your Email"
                    placeholderTextColor={"silver"}
                />
                </View>
            </View>
            <View style={{width:"2%"}}></View>
            <View style={styles.thumbContainer}>
                <Ionicons name="mail" color={"#2a3683"} size={22} />
            </View>
        </View>
        <View style={{flexDirection:'row', width:'100%', marginTop:15}}>
            <View style={styles.greyContainer}>
                <View style={{width:'100%', paddingLeft:5, paddingTop:1}}>
                <TextInput 
                    autoFocus={true} 
                    style={[styles.input, {padding:10}]}
                    onChangeText={setPass}
                    value={pass}
                    placeholder="Enter Your Password"
                    placeholderTextColor={"silver"}
                />
                </View>
            </View>
            <View style={{width:"2%"}}></View>
            <View style={styles.thumbContainer}>
                <MaterialCommunityIconsIcons name="lastpass" color={"#2a3683"} size={22} />
            </View>
        </View>
        <View style={{marginTop:20, justifyContent:"center", alignItems:'center'}}>
            <TouchableOpacity style={styles.buttonBase} onPress={handleSubmit} disabled={load?true:false}>
                <Text style={styles.btnText}>{!load?"Continue":<ActivityIndicator color={"white"} />}</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default React.memo(LoginComponent)

const styles = StyleSheet.create({
    blackTxt:{
        color:'#36454F',
        fontSize:25,
        fontFamily:'ProximaBold'
    },
    redTxt:{
        color:'maroon',
        fontSize:15,
        marginTop:5,
        fontFamily:'ProximaBold'
    },
    gretTxt:{
        color:'#76848D',
        fontSize:15,
        marginTop:5,
        fontFamily:'Proxim'
    },
    divider:{
        backgroundColor:'silver',
        height:1,
        width:'100%',
        marginTop:10,
        marginBottom:10,
    },
    greyContainer:{
        flexDirection:'row', backgroundColor:bgColor, width:'83%', borderRadius:5
    },
    vertical:{
        backgroundColor:'silver', width:1, marginTop:11,marginBottom:11
    },
    countryFlag: {
        height: 23,
        width: 35,
        borderRadius: 2,
        marginTop:"10%",
        marginLeft:10,
    },
    input: {
        color:'#36454F',
        fontFamily:'Proxim'
    },
    thumbContainer:{
        borderColor:'#2a3683', 
        borderWidth:1, 
        width:'15%', 
        borderRadius:5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonBase: {
        width: "100%",
        height: 45,
        backgroundColor: '#2a3683',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
        btnText:{
        color:'white',
        fontFamily:'Proxim'
    },
});