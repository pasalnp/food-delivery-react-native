
import React, {useState } from "react";
import {
  View,
  Text,StyleSheet,
  Image
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import {COLORS, images, SIZES } from '../constants';
import ImageContainer from "./Components/ImageContainer";
import Header from "./Components/Header";
import { Picker } from "@react-native-picker/picker";
import { navigate } from "../navigation/RootNav";


const AddItem = ({ navigation }) => {
  const[pickerValue, setPickerValue] =useState('FoodItems')
  return (
        <>
       <Header title={'Add Items'}/>
       <View style={{ padding: SIZES.padding }}>
         <View style={styles.picker}>
       <Picker style={styles.picker} selectedValue={pickerValue}
     onValueChange={(itemValue) => setPickerValue(itemValue)}>
       <Picker.Item label="Food Item" value="Food Item"/>
       <Picker.Item label="Food Category" value="Food Category"/>
     </Picker>
     </View>
    <View style={{paddingTop:20,flexDirection:'row', alignContent:'space-between',justifyContent:'space-evenly'}}>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/739/739198.png'}}
        resizeMode='cover'
        style={{height:50, width:50,borderRadius:6,borderColor:'grey',borderWidth:3}}
        />


    </View> 
    <TextInput style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={'Item Name'}/>
    <TextInput style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={'Category'}/>
    <TextInput keyboardType='number-pad' style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={'Price'}/>
    {/* <TextInput style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={''}/>
    <TextInput keyboardType='default' style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={''}/> */}
    <View style={{padding:50,flexDirection:'row', justifyContent:'space-evenly',alignContent:'space-around'}}>
      <TouchableOpacity onPress={()=>navigate('home')}><View style={{padding:10, height:40, width:80,backgroundColor:'red', borderRadius:10}}>
<Text style={{color:'white', fontSize:20, textAlign:'center'}}>Cancel</Text>
</View>
</TouchableOpacity>
<TouchableOpacity>
<View style={{padding:10, height:40, width:80,backgroundColor:COLORS.primary, borderRadius:10}}>
<Text style={{color:'white', fontSize:20, textAlign:'center'}}>Add</Text>
</View>
</TouchableOpacity>
      </View>
      
    </View>
    </>
    )
  }

  const styles= StyleSheet.create({
    
    picker:{
      height:40,
      width:150,
      borderColor:COLORS.primary,
      borderRadius:6,
      borderWidth:3,
      backgroundColor:'blue',
      color:COLORS.white,
      textAlign:'center',
      alignItems:'center',
      alignContent:'center',
      justifyContent:'center'
     
    
           
    },
  })
  
  export default AddItem;
  