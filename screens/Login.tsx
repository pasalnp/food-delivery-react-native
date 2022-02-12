import { Button, ButtonBase, Select } from "@material-ui/core";
import SelectInput from "@material-ui/core/Select/SelectInput";
import { Input } from "native-base";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import {
  icons, images, SIZES,COLORS, Headline1, Headline2, Headline3,
  Headline4, Body1, Body2,GlobalStyle,
  Body3, Body4, Body5, LargeTitle
} from '../constants'
import { user } from "../constants/icons";
import Header from "./Components/Header";
import { navigate } from "../navigation/RootNav";

const Login = ({ navigation }) => {

  const [pass,setPass]= useState('');
  const [logedin,setLoggedin]= useState('');
  const [user,setUser]= useState('');
  const[pickerValue, setPickerValue] =useState('Admin')

  const loginHandler = ()=>{
    console.log(user,pass);
if(pass=='123'){
  navigate('tabs');
  user=='sabin' ? setLoggedin('logged in') : setLoggedin('not logged in'); 

}
  }
  const goToTabs = () => {

    navigate('tabs');
  }
  const LoginData = [
    {
      id: 1,
      name: "subin",
      pass: '1234',
    },
    {
      id: 2,
      name: "sumir",
      pass: '1234',
    },
    

  ]
  useEffect(() => {
    if(logedin=='logged in'){
    goToTabs();
    }
  },[logedin])
  
  return (
    <>
    <Header title={'Sign In'} />
    <View style={{ padding: SIZES.padding * 2 }}>       
     
    <Text style={{fontSize:18, color:COLORS.primary}}>WELCOME</Text>
    <Text>Please your credintial for login</Text>
    <Text> your credintial for login is {user} {pass} {logedin}</Text>
     <Picker style={styles.picker} selectedValue={pickerValue}
     onValueChange={(itemValue) => setPickerValue(itemValue)}>
       <Picker.Item label="Admin" value="Admin"/>
       <Picker.Item label="Customer" value="Customer"/>
     </Picker>
    <TextInput onChangeText={setUser} style={styles.box} placeholder={'User Name'}/>
    <TextInput secureTextEntry={true} onChangeText={setPass} style={styles.box} placeholder={'Password'}/>
    <TouchableOpacity onPress={loginHandler} style={{paddingTop:50,paddingHorizontal:50}}>
      <View style={{padding:10,backgroundColor:COLORS.primary, borderRadius:10}}>
<Text style={{color:'white', fontSize:18, textAlign:'center'}} >Login</Text>
</View>
      </TouchableOpacity>
<TouchableOpacity style={{paddingTop:20,alignItems:'flex-end'}}><Text style={{color:COLORS.primary, fontWeight:'bold', fontSize:16}}>Forgot Password?</Text></TouchableOpacity>
      
      <View style={{paddingTop:30, flexDirection:'row', alignContent:'center', justifyContent:'center'}}>
        <Text style={{fontSize:16}}>don't have Account? </Text>
        <TouchableOpacity><Text style={{color:COLORS.primary, fontWeight:'bold', fontSize:16}}>Sign Up</Text></TouchableOpacity>
    </View>
    </View>
    </>
    )
  }

  const styles= StyleSheet.create({
    
    picker:{
      height:40,
      width:200,
      borderColor:COLORS.primary,
      borderRadius:10,
      borderBottomColor:'red',
      backgroundColor:COLORS.secondary,
      color:COLORS.black,
      textAlign:'center',
    
           
    },
    box:{
      padding:20,
      borderBottomColor:COLORS.primary,
      borderBottomWidth:3,
      fontSize:18
    }
  })
  
  export default Login;
  