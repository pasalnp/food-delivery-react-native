
import React, {useState} from "react";
import {
  View,
  Text,
} from "react-native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import {COLORS, SIZES } from '../constants'
import { navigate } from "../navigation/RootNav";

import { user } from "../constants/icons";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "./Components/Header";
import { Center, FormControl, Icon, Input, KeyboardAvoidingView, NativeBaseProvider, Stack, useKeyboardDismissable, WarningOutlineIcon } from "native-base";
const Example = () => {
  const [pass,setPass]= useState('');
  const [num,setNum]= useState('');
  const [email,setEmail]= useState('');
  const [showPass,SetShowPass]= useState(true);
  const [errorPass,SetErrorPass]= useState(false);
  const [errorNum,SetErrorNum]= useState(false);
  const [errorEmail,SetErrorEmail]= useState(false);
  let validEmail=new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 );
  


  const handlePass = (e) =>{
    if(pass.length<8){
      SetErrorPass(true);
    }else{
      SetErrorPass(false);
    }
    if(num.length==10){
      SetErrorNum(false);
    }else{
      SetErrorNum(true);
    }
    if(!validEmail.test(email)){
      SetErrorEmail(true);
    }else{
      SetErrorEmail(false);

    }
  }
  return <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"}><Stack space={4} w="100%" >
    
    
      <Input w={{
      base: "100%",
      md: "25%",
      
    }} style={{borderColor:'red'}} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Name" />
      <Input w={{
      base: "100%",
      md: "25%"
    }} InputLeftElement={<Icon as={<MaterialIcons name="location-on" />} size={5} mr="2" color="muted.400" />} placeholder="Address" />
    <FormControl isInvalid={errorNum} w="100%" >
    <Input onChangeText={setNum} keyboardType="numeric" w={{
      base: "100%",
      md: "25%"
    }} InputLeftElement={<Icon as={<MaterialIcons name="phone" />} size={5} ml="2" color="muted.400" />} placeholder="Phone Number" />
      {errorNum ? (
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
         Invalid phone number
        </FormControl.ErrorMessage>)
        :<></>}
      </FormControl>
      <FormControl isInvalid={errorEmail} w="100%" >
        <Input onChangeText={setEmail} w={{
      base: "100%",
      md: "25%"
    }} InputLeftElement={<Icon as={<MaterialIcons name="mail" />} size={5} ml="2" color="muted.400" />} placeholder="E-mail" />
      {errorEmail ? (
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
         Invalid e-mail
        </FormControl.ErrorMessage>)
        :<></>}
     </FormControl>
    <Input type='email' w={{
      base: "100%",
      md: "25%"
    }} InputLeftElement={<Icon as={<MaterialIcons name="person-pin" />} size={5} ml="2" color="muted.400" />} placeholder="User Name" />

     <FormControl isInvalid={errorPass} w="100%" >
        
        <Input onChangeText={setPass} type={showPass? 'password' : 'text'} w={{
      base: "100%",
      md: "25%"
    }} InputLeftElement={<Icon as={<MaterialIcons name="lock" />} size={5} ml="2" color="muted.400" />} InputRightElement={
    <Icon onPress={()=>SetShowPass(!showPass)}  as={<MaterialIcons name={showPass? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />} placeholder="Password" />
        {errorPass ? (
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
         Password should be atleast eight character
        </FormControl.ErrorMessage>)
        :<></>}
      </FormControl>
     
    <TouchableOpacity onPress={handlePass} style={{paddingHorizontal:50, alignContent:'center', justifyContent:'center'}}>
     <View style={{padding:10,backgroundColor:COLORS.primary, borderRadius:10}}>
 <Text style={{color:'white', fontSize:18, textAlign:'center'}}>Sign Up</Text>
 </View>
       </TouchableOpacity>
       <View style={{paddingTop:20, flexDirection:'row', alignContent:'center', justifyContent:'center'}}>
         <Text style={{fontSize:16}}>Alredy Signed Up? </Text>
         <TouchableOpacity onPress={()=>navigate('login')}><Text style={{color:COLORS.primary, fontWeight:'bold', fontSize:16}}>Sign In</Text></TouchableOpacity>
     </View>
     
    </Stack>
    </KeyboardAvoidingView>
};

const SignUp = ({ navigation }) => {

  
  
  return (
    <NativeBaseProvider>
            <Header title={'Sign Up'}/>
            <Text style={{color:'#888',paddingBottom:10}}>Please fill your information to sign up</Text>
            <ScrollView>
  
    <Center flex={1} px="3" >
        <Example />
    </Center>
    </ScrollView>
  </NativeBaseProvider>
    
    )
  }
  
  export default SignUp;
  