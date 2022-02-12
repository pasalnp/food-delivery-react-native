// import { Button, ButtonBase, Select } from "@material-ui/core";
// import SelectInput from "@material-ui/core/Select/SelectInput";
// import { Input } from "native-base";
import React, { useState } from "react";
import {
  View,
  Text,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import {COLORS, SIZES } from '../constants'
import { navigate } from "../navigation/RootNav";
// import {
//   icons, images, SIZES, COLORS, Headline1, Headline2, Headline3,
//   Headline4, Body1, Body2,
//   Body3, Body4, Body5, LargeTitle
// } from '../constants'
import { user } from "../constants/icons";
import Header from "./Components/Header";

const SignUp = ({ navigation }) => {
//   const [pass,setPass]= useState('');
//   const [logedin,setLoggedin]= useState('');
//   const [user,setUser]= useState('');
//   const loginHandler = ()=>{
// if(pass=='123'){
//   user=='sabin' ? setLogeedin('logged in') : setLoggedin('not logged in'); 
// }
//   }
//   const LoginData = [
//     {
//       id: 1,
//       name: "subin",
//       pass: '1234',
//     },
//     {
//       id: 2,
//       name: "sumir",
//       pass: '1234',
//     },
    
    
//   ]
  
  
  
  return (
    <View>
       <Header title={'Sign Up'}/>
    <Text style={{fontSize:18, paddingTop:20}}></Text>
    <Text style={{color:'#888'}}>Please fill your information to sign up</Text>
    <TextInput style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={'Name'}/>
    <TextInput style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={'Address'}/>
    <TextInput keyboardType='number-pad' style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={'Phone Number'}/>
    <TextInput style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={'User Name'}/>
    <TextInput keyboardType='default' style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={'Password'}/>
    <TouchableOpacity style={{paddingHorizontal:50, alignContent:'center', justifyContent:'center'}}>
      <View style={{padding:10,backgroundColor:COLORS.primary, borderRadius:10}}>
<Text style={{color:'white', fontSize:18, textAlign:'center'}}>Sign Up</Text>
</View>
      </TouchableOpacity>
      <View style={{paddingTop:20, flexDirection:'row', alignContent:'center', justifyContent:'center'}}>
        <Text style={{fontSize:16}}>Alredy Signed Up? </Text>
        <TouchableOpacity onPress={()=>navigate('login')}><Text style={{color:COLORS.primary, fontWeight:'bold', fontSize:16}}>Sign In</Text></TouchableOpacity>
    </View>
    </View>
    
    )
  }
  
  export default SignUp;
  