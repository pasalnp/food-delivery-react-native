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
import {SIZES,COLORS} from '../constants'
import { user } from "../constants/icons";
import Header from "./Components/Header";
import { navigate } from "../navigation/RootNav";

const ResetPassword= ({ navigation }) => {

  return (
    <>
    <Header title={'Reset Password'} />
    <View style={{ padding: SIZES.padding * 2 }}>       
     
    <Text style={{fontSize:32, color:COLORS.primary}}>Forgot your Password</Text>
    <Text>No worries! Enter your New Password</Text>
    <TextInput style={styles.box} placeholder={'New password'}/>
    <TextInput style={styles.box} placeholder={'Confirm New Password'}/>
    <TouchableOpacity onPress={()=>navigate('login')}style={{paddingTop:10,alignItems:'flex-end'}}>
        <Text style={{color:COLORS.primary,fontWeight:'bold', fontSize:16}}>Cancel</Text>
        </TouchableOpacity>
    <TouchableOpacity  style={{paddingTop:50,paddingHorizontal:50}}>
      <View style={{padding:10,backgroundColor:COLORS.primary, borderRadius:10}}>
<Text style={{color:'white', fontSize:18, textAlign:'center'}} >Change Password</Text>
</View>
      </TouchableOpacity>
      
    </View>
    </>
    )
  }

  const styles= StyleSheet.create({
    
    box:{
      padding:20,
      borderBottomColor:COLORS.primary,
      borderBottomWidth:3,
      fontSize:18
    }
  })
  
  export default ResetPassword;
  