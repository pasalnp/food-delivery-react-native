

import React, {useState,useEffect } from "react";
import {
  View,
  Text,StyleSheet,
  Image
} from "react-native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import DropDown from 'react-native-paper-dropdown';
import {COLORS, images, SIZES } from '../constants';
import Header from "./Components/Header";

import { navigate } from "../navigation/RootNav";
import { Checkbox, Provider } from "react-native-paper";
import { API } from "../Config/var";
import { PostRequest,GetRequest } from "../Config/axios";
import { Button, Icon, NativeBaseProvider, Select } from "native-base";
import { Picker } from "../constants/theme";
import { _pickImage } from "../constants/Tools";


const AddItem = ({ navigation }) => {
  const [image, setImage] = React.useState(false);
  const [name, setName] = React.useState(false);
  const [calories, setCalories] = React.useState(false);
  const [price, setprice] = React.useState(false);
  const [avilday, setAvilday] = React.useState(false);
  const [description, setdescription] = React.useState(false);

  const addItemHandler = () => {
    PostRequest(`${API}/addItem`, {category, image, name,calories,price,Avilday:avilday,description}).then((res)=>{
      console.log('data>>>>>>>>>>>>>>>>>>>>',res.data.message);
      alert(res.data.message);
    }).catch(()=>alert('Error user already exists'));
  }
  const [category, setCategory] = useState<string>('');
  const [categorypiker, setCategoryPiker] = useState([]);
  const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [time, setTime] = useState<string>('');
  

  const [sunday, setSunday] = React.useState(false);
  const [monday, setMonday] = React.useState(false);
  const [tuesday, setTuesday] = React.useState(false);
  const [wednesday, setWednesday] = React.useState(false);
  const [thursday, setThursday] = React.useState(false);
  const [friday, setFriday] = React.useState(false);
  const [saturday, setSaturday] = React.useState(false);
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
  useEffect(()=>{
    GetRequest(`${API}/get/categoryData`,).then(res=>{
      setCategoryPiker(res.data.content.data);
      console.log("data::::",res.data.content.data);
    })  
  }
  ,[])


  const CategoryList = [
    {
      label: 'Rice',
      value: 'rice',
    },
    {
      label: 'Tea',
      value: 'tea',
    },
    {
      label: 'Chowmin',
      value: 'chowmin',
    },
   
  ];

  const TimeList = [
    {
      label: '10-15 min',
      value: '10-15 min',
    },
    {
      label: '15-30 min',
      value: '15-30 min',
    },
    {
      label: '30-45 min',
      value: '30-45 min',
    },
    {
      label: '45-60 min',
      value: '45-60 min',
    },
    {
      label: '60-90 min',
      value: '60-90 min',
    },
    {
      label: '1-2 Hours',
      value: '1-2 Hours',
    },
  
  ];
  
  return (
        <NativeBaseProvider>
       <Header title={'Add Items'}/>
       <ScrollView showsVerticalScrollIndicator={false}>
         <View style={{ padding: SIZES.padding }}>
         
    <View style={{paddingTop:20, alignContent:'center',justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/739/739198.png'}}
        resizeMode='cover'
        style={{height:100, tintColor:COLORS.secondary,width:100,borderRadius:6,borderColor:'grey',borderWidth:3}}
        />
         </TouchableOpacity>
         <Button onPress={chooseImage}>
    <Icon name='image' />
    </Button>
    <Button onPress={chooseCamera}>
    <Icon name='camera' />
    </Button>
    <Text style={{color:COLORS.darkgray, fontSize:18}}>Add Image</Text>

    </View> 
   
    <TextInput onChangeText={setName} style={styles.box} placeholder={'Item Name'}/>
    <TextInput onChangeText={setdescription}  style={styles.box} placeholder={'Description of food'}/>
    <TextInput onChangeText={setCalories}  keyboardType='number-pad' style={styles.box} placeholder={'Calories'}/>
    {/* <TextInput style={styles.box} placeholder={'Category'}/> */}
<View style={styles.box2}>
          <Picker
            mode='dropdown'
            style={{ flex: 1, color: '#445870' }}
            placeholder='Bill Type'
            placeholderStyle={{ color: '#BFC6EA' }}
            placeholderIconColor='#007AFF'
            selectedValue={category}
            onValueChange={setCategory}
          >
            {/* <Picker.Item label='Chose' value=' ' /> */}
            {categorypiker.map((data)=>{
              return(<Picker.Item label={data.name} value={data.id} />)
            })}
            {/* <Picker.Item label='SALE' value='SALE' />
            <Picker.Item label='PURCHASE' value='PURCHASE' />
            <Picker.Item label='RECIEPT' value='RECIEPT' />
            <Picker.Item label='VOUCHER' value='VOUCHER' />
            <Picker.Item label='EXPENSE' value='EXPENSE' /> */}
          </Picker>
          </View>
    <TextInput onChangeText={setprice} keyboardType='number-pad' style={styles.box} placeholder={'Price'}/>
    <DropDown
              label={'Ready Time'}
              mode={'outlined'}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={time}
              setValue={setTime}
              list={TimeList}
            />
<View style={styles.box2}>
  <Text style={{ padding: SIZES.padding, fontSize:20, color:COLORS.primary }}>Available on Days</Text>
  <Picker
            mode='dropdown'
            style={{ flex: 1, color: '#445870' }}
            placeholder='Bill Type'
            placeholderStyle={{ color: '#BFC6EA' }}
            placeholderIconColor='#007AFF'
            selectedValue={avilday}
            onValueChange={setAvilday}
          >
            <Picker.Item label='Sunday' value='Sunday' />
            <Picker.Item label='Monday' value='Monday' />
            <Picker.Item label='Tuesday' value='Tuesday' />
            <Picker.Item label='Wednesday' value='Wednesday' />
            <Picker.Item label='Thursday' value='Thursday' />
            <Picker.Item label='Friday' value='Friday' />
            <Picker.Item label='Saturday' value='Saturday' />
          </Picker>
{/* <View style={{flexDirection:'row'}}>
    <View style={{ width:100,marginLeft:50}} > 
          <View style={styles.week}>
            <Checkbox
          status={sunday ? 'checked' : 'unchecked'} 
          onPress={()=>setSunday(!sunday)}
        /><Text style={styles.text}>Sunday</Text>
        </View>
        <View style={styles.week}>
        <Checkbox
          status={monday ? 'checked' : 'unchecked'} 
          onPress={()=>setMonday(!monday)}
        /><Text style={styles.text}>Monday</Text>
        </View>
        <View style={styles.week}>
        <Checkbox
          status={tuesday ? 'checked' : 'unchecked'} 
          onPress={()=>setTuesday(!tuesday)}
        /><Text style={styles.text}>Tuesday</Text>
        </View>
        <View style={styles.week}>
        <Checkbox
          status={wednesday ? 'checked' : 'unchecked'} 
          onPress={()=>setWednesday(!wednesday)}
        /><Text style={styles.text}>Wednesday</Text>
        </View>
       
         </View>

         <View style={{ width:100,paddingLeft:40,marginRight:50}}>
         <View style={styles.week}>
         <Checkbox
          status={thursday ? 'checked' : 'unchecked'} 
          onPress={()=>setThursday(!thursday)}
        /><Text style={styles.text}>Thursday</Text>

          </View>

          <View style={styles.week}>
          <Checkbox
          status={friday ? 'checked' : 'unchecked'} 
          onPress={()=>setFriday(!friday)}
        /><Text style={styles.text}>Friday</Text>
        </View>
        <View style={styles.week}>
        <Checkbox
          status={saturday ? 'checked' : 'unchecked'} 
          onPress={()=>setSaturday(!saturday)}
        /><Text style={styles.text}>Saturday</Text>
        </View>
        
        </View>
        </View>*/}
        </View> 
    {/* <TextInput style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={'Enter Category Name'}/>
    <TextInput keyboardType='default' style={{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,margin:10,}} placeholder={''}/> */}
    <View style={{padding:50,flexDirection:'row', justifyContent:'space-evenly',alignContent:'space-around'}}>
      <TouchableOpacity onPress={()=>navigate('tab2')}><View style={{padding:10, height:40, width:80,backgroundColor:'red', borderRadius:10}}>
<Text style={{color:'white', fontSize:20, textAlign:'center'}}>Cancel</Text>
</View>
</TouchableOpacity>
<View style={{padding:10, height:40,width:80,backgroundColor:COLORS.primary, borderRadius:10}}>
<TouchableOpacity onPress={addItemHandler}>
<Text style={{color:'white', fontSize:20, textAlign:'center'}}>Add</Text>
</TouchableOpacity>
</View>
      </View>
      
    </View>
    </ScrollView>
    </NativeBaseProvider>
    )
  }

  const styles= StyleSheet.create({

    box:{padding:10,borderColor:'#ccc',borderWidth:1,borderRadius:6,marginTop:10},
    week:{flexDirection:'row'},
    box2:{marginTop:10,borderRadius:6,borderColor:COLORS.secondary, borderWidth:1, padding:SIZES.padding},
    text:{fontSize:18,paddingTop:10}
  })
  
  export default AddItem;
  