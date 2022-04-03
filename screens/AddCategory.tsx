
import React, {useState } from "react";
import {
  View,
  Text,StyleSheet,
  Image
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import {COLORS, images, SIZES } from '../constants';
import Header from "./Components/Header";
import { Button, Center, FormControl, Icon, KeyboardAvoidingView, NativeBaseProvider, WarningOutlineIcon } from "native-base";
import { navigate } from "../navigation/RootNav";
import { API } from "../Config/var";
import { PostRequest, PutRequest } from "../Config/axios";
import Constants from 'expo-constants';
import { _pickImage } from "../constants/Tools";

const Add = ({ navigation  }) => {
  const [image, setImage] = useState('');
  const[name, setName] =useState('FoodItems');
  const [errorName,SetErrorName]= useState(false);
  const chooseImage = async () => {
    const result = await _pickImage('library');
    
    if (!result.cancelled) {
      setImage(result);
    }
  };
 
  const chooseCamera = async () => {
    const result = await _pickImage();
    
    if (!result.cancelled) {
      setImage(result);
    }
  };
  const addCatHandler = () => {

    let formData = new FormData();
    // ImagePicker saves the taken photo to disk and returns a local URI to it
    if (image.uri) {
      let localUri = image.uri;
      let filename = localUri.split('/').pop();
      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;
      
      formData.append('imageUrl', {
        uri: localUri,
        name: filename,
        type,
        originalname: filename,
      });
      
      formData.append('icon', filename);
    } else {
      formData.append('image', image);
    }
    
    formData.append('name', name);
    if(name.length==0){
      SetErrorName(true);
    }else{
      SetErrorName(false);
    }

    !errorName && PostRequest(`${API}/addcategoryData`, formData).then((res)=>{
      console.log('data>>>>>>>>>>>>>>>>>>>>',res.data.message);
      alert(res.data.message);
      navigate('tab2');
    }).catch(()=>alert('Category already exists'));
  }

  return (
       
     <>
       <Header title={'Add categories'}/>
       <KeyboardAvoidingView>
       <View style={{ padding: SIZES.padding,navigation }}>
         {/* <View style={styles.picker}>
       <Picker style={styles.picker} selectedValue={pickerValue}
     onValueChange={(itemValue) => setPickerValue(itemValue)}>
       <Picker.Item label="Food Item" value="Food Item"/>
       <Picker.Item label="Food Category" value="Food Category"/>
     </Picker>
     </View> */}
    <View style={{paddingTop:20, alignContent:'center',justifyContent:'center',alignItems:'center'}}>
    <Button onPress={chooseImage}>
    <Icon name='image' />
    </Button>
    <Button onPress={chooseCamera}>
    <Icon name='camera' />
    </Button>
    {image ? (
      <Image
      source={{ uri: image.uri }}
      style={{ width: 200, height: 150 }}
      />
      ) : (
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/739/739198.png'}}
        resizeMode='cover'
        style={{height:100, tintColor:COLORS.secondary,width:100,borderRadius:6,borderColor:'grey',borderWidth:3}}
        />
        )}
       
    <Text style={{color:COLORS.darkgray, fontSize:18}}>Add Image</Text>

    </View> 
    <FormControl isInvalid={errorName} w="100%" > 
    <TextInput onChangeText={setName} style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={'Category Name'}/>
    {errorName ? (
    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
             Name cannot be empty
        </FormControl.ErrorMessage>)
        :<></>}
      </FormControl> 
    {/* <TextInput style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={'Category'}/> */}
    {/* <TextInput keyboardType='number-pad' style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={'Price'}/> */}
    {/* <TextInput style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={'Enter Category Name'}/>
    <TextInput keyboardType='default' style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={''}/> */}
    <View style={{padding:50,flexDirection:'row', justifyContent:'space-evenly',alignContent:'space-around'}}>
      <TouchableOpacity onPress={()=>navigate('tab2')}><View style={{padding:10, height:40, width:80,backgroundColor:'red', borderRadius:10}}>
<Text style={{color:'white', fontSize:20, textAlign:'center'}}>Cancel</Text>
</View>
</TouchableOpacity>
<View style={{padding:10, height:40,width:80,backgroundColor:COLORS.primary, borderRadius:10}}>
<TouchableOpacity onPress={addCatHandler}>
<Text style={{color:'white', fontSize:20, textAlign:'center'}}>Add</Text>
</TouchableOpacity>
</View>
      </View>
      
    </View>
    </KeyboardAvoidingView>
    </>
  )
    
  }
  const AddCategory = ({ navigation  }) => {
    return(

<NativeBaseProvider>
            
    
        <Add  navigation   />
  
   
  </NativeBaseProvider>
    
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
  
  export default AddCategory;
  