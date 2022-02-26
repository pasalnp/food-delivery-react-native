
import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import {SIZES} from '../constants'
import { navigate } from "../navigation/RootNav";

const Khalti = ({ navigation }) => {

  
  
 
  return (
    <>
    <View style={styles.title}>
<Text style={styles.title}>Khalti </Text>
</View>

    <View style={{ padding: SIZES.padding * 2 }}>       
     
    <Text style={{fontSize:18, color:'purple'}}>Khalti</Text>
    <Text>Please enter your Khalti credentials</Text>
    
    
    <TextInput  style={styles.box} placeholder={'User Name / Phone number'}/>
    <TextInput secureTextEntry={true}  style={styles.box} placeholder={'Password / MPIN'} />
    <TouchableOpacity  style={{paddingTop:50,paddingHorizontal:50}}>
      <View style={{padding:10,backgroundColor:'purple', borderRadius:10}}>
<Text style={{color:'white', fontSize:18, textAlign:'center'}} >Login</Text>
</View>
      </TouchableOpacity>


     
    </View>
    </>
    )
  }

  const styles= StyleSheet.create({
    title: {
        height:60,
        padding:15,
        borderRadius:6,
        marginBottom: 15,
        borderColor:'#fff',
        color:'#fff',
        borderWidth:2,
        fontSize:25,
        backgroundColor:'purple',
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center',
        marginTop:20
    },
    
   
    box:{
      padding:20,
      borderBottomColor:'purple',
      borderBottomWidth:3,
      fontSize:18
    }
  })
  
  export default Khalti;
  