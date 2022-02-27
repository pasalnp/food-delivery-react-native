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
import { API } from "../Config/var";
import { saveDataToStorage } from "../constants/Tools";
import { GetRequest, PostRequest } from "../Config/axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Center } from "native-base";
import { NativeBaseProvider } from "native-base";


const Login = ({ navigation }) => {

  const [pass,setPass]= useState('');
  const [logedin,setLoggedin]= useState('');
  const [user,setUser]= useState('');
  const[pickerValue, setPickerValue] =useState('Admin')
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('user_id', JSON.stringify(value))
    } catch (e) {
      console.log(e);
      
    }
  }
  const loginHandler = async ()=>{
    if(pickerValue=='Customer'){
    PostRequest(`${API}/login`, {username:user,password:pass,role:pickerValue}).then((res)=>{
      (res.status==200) ? goToTabs('tabs') : alert('Invalid username or password'); 
      setLoggedin('logged in');
      AsyncStorage.removeItem('user_id');
      storeData(res.data.user.id);
      console.log('data>>>>>>>>>>>>>>>>>>>>',res.data.user.id);
    }).catch((err)=>{
      alert('Invalid username or password');
    })
    }else{
      if(pass=='#'){
        // navigate('tabs');
        pickerValue=='Customer' ?  goToTabs('tab2') :  goToTabs('tab2');
        user=='sabin' ? setLoggedin('logged in') : setLoggedin('not logged in'); 
      
      }else{
        alert('Invalid username or password');
      }
    }

  }
  const goToTabs = (page) => {
    navigate(page);
  }
  useEffect(() => {
    if(logedin=='logged in'){
  
    // pickerValue=='Admin'?  goToTabs('tab2') : goToTabs('tabs');
    
    }
  },[logedin])
  
  return (
    <NativeBaseProvider>
    <Header title={'Sign In'} />
    <View style={{ padding: SIZES.padding * 2 }}>       
     {pass=='sabin'?<Text>Password</Text> :  <></>}
    <Center style={{display:'flex',flexDirection:'column',}}>
    <Headline1 style={{ color:COLORS.primary,marginBottom:5,}}>WELCOME</Headline1>
    <Text>Please your credintial for login</Text>
    <Picker style={styles.picker} selectedValue={pickerValue}
     onValueChange={(itemValue) => setPickerValue(itemValue)}>
       <Picker.Item label="Admin" value="Admin"/>
       <Picker.Item label="Customer" value="Customer"/>
     </Picker>
     </Center>
    

    <TextInput onChangeText={setUser} style={styles.box} placeholder={'User Name'}/>
    <TextInput secureTextEntry={true} onChangeText={setPass} style={styles.box} placeholder={'Password'} />
    <TouchableOpacity onPress={loginHandler} style={{paddingTop:50,paddingHorizontal:50}}>
      <View style={{padding:10,backgroundColor:COLORS.primary, borderRadius:10}}>
<Text style={{color:'white', fontSize:18, textAlign:'center'}} >Login</Text>
</View>
      </TouchableOpacity>
<TouchableOpacity onPress={()=>goToTabs('forgotpassword')} style={{paddingTop:20,alignItems:'flex-end'}}>
  <Text style={{color:COLORS.primary, fontWeight:'bold', fontSize:16}}>Forgot Password?</Text>
  </TouchableOpacity>
  <Center style={{display:'flex',flexDirection:'column',}}>
  <View>
  
     </View>
  {pickerValue=='Admin'?  <></> :  <View style={{paddingTop:30, flexDirection:'row', alignContent:'center', justifyContent:'center'}}>
        <Text style={{fontSize:16}}>don't have Account? </Text>
        <TouchableOpacity onPress={()=>navigate('signup')}>
          <Text style={{color:COLORS.primary, fontWeight:'bold', fontSize:16}}>Sign Up</Text>
          </TouchableOpacity>
          
    </View>}
    </Center>
    </View>
    </NativeBaseProvider>
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
      marginTop:20,
      marginBottom:100,
    
           
    },
    box:{
      padding:20,
      borderBottomColor:COLORS.primary,
      borderBottomWidth:3,
      fontSize:18
    }
  })
  
  export default Login;
  