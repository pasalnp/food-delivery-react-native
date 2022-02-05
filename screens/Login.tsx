import { Button, ButtonBase, Select } from "@material-ui/core";
import SelectInput from "@material-ui/core/Select/SelectInput";
import { Input } from "native-base";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import {
  icons, images, SIZES, COLORS, Headline1, Headline2, Headline3,
  Headline4, Body1, Body2,
  Body3, Body4, Body5, LargeTitle
} from '../constants'
import { user } from "../constants/icons";

const Login = ({ navigation }) => {
  const [pass,setPass]= useState('');
  const [logedin,setLoggedin]= useState('');
  const [user,setUser]= useState('');
  const loginHandler = ()=>{
if(pass=='123'){
  user=='sabin' ? setLogeedin('logged in') : setLoggedin('not logged in'); 
}
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
  
  const[pickerValue, setPickerValue] =useState('Admin')
  
  return (
    <View style={{ padding: SIZES.padding * 2 }}>
    <Text style={{fontSize:18, paddingTop:20}}>Sign Up</Text>
    <Text>Please your credintial for login</Text>
    <Text> your credintial for login is {user} {pass} {logedin}</Text>
     <Picker style={styles.picker} selectedValue={pickerValue}
     onValueChange={(itemValue) => setPickerValue(itemValue)}>
       <Picker.Item label="Admin" value="Admin"/>
       <Picker.Item label="Customer" value="Customer"/>
     </Picker>
    <TextInput onChangeText={setUser} style={{padding:20,borderRightColor:'red',borderBottomWidth:3,}} placeholder={'User Name'}/>
    <TextInput onChangeText={setPass} style={{padding:20,borderRightColor:'red',borderBottomWidth:3,}} placeholder={'Password'}/>
    <TouchableOpacity style={{padding:50}}>
      <View style={{padding:10,backgroundColor:'red', borderRadius:10}}>
<Text style={{color:'white', fontSize:18, textAlign:'center'}}>Login</Text>
</View>
      </TouchableOpacity>
    </View>
    )
  }

  const styles= StyleSheet.create({
    picker:{
      height:40,
      width:200,
      borderColor:'blue',
      borderRadius:10,
      borderWidth:2,
      backgroundColor:'gray',
      color:'white',
      textAlign:'center'
      
    }
  })
  
  export default Login;
  