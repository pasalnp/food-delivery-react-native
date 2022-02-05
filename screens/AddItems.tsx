
import React from "react";
import {
  View,
  Text,
  Image
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import {images, SIZES } from '../constants';
import ImageContainer from "./Components/ImageContainer";

const AddItem = ({ navigation }) => {
  return (
    <View style={{ padding: SIZES.padding * 2 }}>
    <Text style={{fontSize:18, paddingTop:20}}>Add Item</Text>
    <View style={{flexDirection:'row', alignContent:'space-between',justifyContent:'space-evenly'}}>
        <ImageContainer
        
        source={images.burger_restaurant_2}
            
        />
        <ImageContainer
        source={images.baked_fries}
            
        />
        <ImageContainer
        source={images.hawaiian_pizza}
            
        />
        <ImageContainer
        source={images.crispy_chicken_burger}
            
        />
    </View> 
    <TextInput onChangeText='' style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={'Item Name'}/>
    <TextInput onChangeText='' style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={'Category'}/>
    <TextInput onChangeText='' keyboardType='number-pad' style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={'Price'}/>
    <TextInput onChangeText='' style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={''}/>
    <TextInput onChangeText='' keyboardType='default' style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={''}/>
    <TouchableOpacity style={{padding:50,flexDirection:'row', justifyContent:'space-evenly',alignContent:'space-around'}}>
      <View style={{padding:10, height:40, width:80,backgroundColor:'blue', borderRadius:10}}>
<Text style={{color:'white', fontSize:20, textAlign:'center'}}>Cancel</Text>
</View>
<View style={{padding:10, height:40, width:80,backgroundColor:'blue', borderRadius:10}}>
<Text style={{color:'white', fontSize:20, textAlign:'center'}}>Add</Text>
</View>
      </TouchableOpacity>
      {/* <View style={{paddingTop:20, flexDirection:'row', alignContent:'center', justifyContent:'center'}}>
        <Text style={{fontSize:16}}>Alredy Signed Up? </Text>
        <TouchableOpacity><Text style={{color:'blue', fontWeight:'bold', fontSize:16}}>Sign In</Text></TouchableOpacity>
    </View> */}
    </View>
    
    )
  }
  
  export default AddItem;
  