
import React,{useEffect,useState} from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import {COLORS, SIZES} from '../constants'
import { getDataFromStorage } from "../constants/Tools";
import { navigate } from "../navigation/RootNav";
import { PostRequest,GetRequest } from "../Config/axios";
import { API } from "../Config/var";
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyCart = ({ route,navigation }) => {
  let {  orderItems } = route?.params;
 const [user_id,setUserId] = useState();
 const [cart_data,setcartdata] = useState([]);
  const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('user_id')
    const cart = await AsyncStorage.getItem('order_item')
    if(value !== null) {
      // value previously stored
      setUserId(value)
      setcartdata(cart)
      console.log(value)
    }
  } catch(e) {
    console.log(e);
    
    // error reading value
  }
}
useEffect(()=>{
  getData();
  console.log("mycart:::",orderItems);},[])
  useEffect(()=>{
    
    console.log("mycart:::",orderItems);},[orderItems])
  const addOrderHandler = () => {
    orderItems.map((item)=>{
      PostRequest(`${API}/addOrder`, {user_id:user_id, quantity:item.qty, product_id:item.id}).then((res)=>{
        console.log('data>>>>>>>>>>>>>>>>>>>>',res.data.message);
        alert(res.data.message);
      }).catch(()=>alert('Error user already exists'));
    }

    )
    
  }

  return (
    <>
    <View style={styles.title}>
<Text style={styles.title}>My Cart </Text>
</View>
<Text>Your Cart Items</Text>
{orderItems?.map((item)=>{
      return(
        <>
        <View style={styles.box}>
          <View style={styles.info}>
            <Text  style={styles.name}>{item?.name}</Text>
            {/* <Text  style={styles.discription}>{item?.description}</Text> */}
            <Text  style={styles.rate}>Rs. {item?.price}</Text>
            
            
          
        </View>
        <View style={{marginRight:20,alignContent:'center', justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.qty}>Qty</Text>
        <Text style={{fontSize:24,alignContent:'center',alignItems:'center',color:'red',justifyContent:'center'}} >{item?.qty}</Text>
        </View>
        <View><Text style={styles.price}>Rs.{item?.qty * item?.price}</Text></View>
        </View>
        </>
        )
    })}
    <View style={{ padding: SIZES.padding * 2 }}>       
     
    {/* <Text style={{fontSize:18, color:COLORS.primary}}>Khalti</Text>
    <Text>Please enter your Khalti credentials</Text>
   
    
    <TextInput  style={styles.box} placeholder={'User Name / Phone number'}/>
    <TextInput secureTextEntry={true}  style={styles.box} placeholder={'Password / MPIN'} /> */}
    <TouchableOpacity  style={{paddingTop:50,paddingHorizontal:50}} onPress={()=>{navigate('payment',{orderItems:orderItems})}}>
      <View style={{padding:10,backgroundColor:COLORS.primary, borderRadius:10}}>
<Text style={{color:'white', fontSize:18, textAlign:'center'}} >Place Order</Text>
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
        backgroundColor:COLORS.primary,
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center',
        marginTop:20
    },
    
   
    box:{
      padding:20,
      borderBottomColor:COLORS.primary,
      borderBottomWidth:3,
      fontSize:18
    },container: {
      height:450,
      backgroundColor: 'orange',
      
    },
    icon:{
      width:25,
      height:25,
      bottom:30
     
    },
    image: {
      width: 80,
      height:80
    },
    box: {
      marginTop:10,borderRadius:20,
      backgroundColor: 'white',
      flexDirection: 'row',
      shadowColor: 'black',
      shadowOpacity: .2,
      shadowOffset: {
        height:1,
        width:-2
      },
      elevation:2
    },
    info: {
      flex:1,
      width:50,
      flexDirection: 'column',
      paddingLeft:10
    },
    name: {
      fontSize:18,
      marginTop:5,
      color: '#333'
    },
    price: {
      fontSize:20,
      alignContent:'center',
      justifyContent:'center',
      alignItems:'center',
      color: 'green',
      marginRight:10,
      paddingTop:10
    },
    qty: {
      fontSize:16,
      alignContent:'center',
      justifyContent:'center',
      alignItems:'center',
      
    },
    discription:{
      fontSize:12,
      marginTop:5,
      color: '#333'
    },
    rate:{
      fontSize:16,
      marginTop:5,
      color: '#333'
    },
    amount:{
      margin:10,
      padding:10,
      height:80,
      borderRadius:6,
      borderColor:COLORS.primary,
      borderWidth:2,
      backgroundColor:COLORS.white,
      alignContent:'center',
      alignItems:'center'
    },
    cancel: {
      height:50,
      width:100,
      backgroundColor:COLORS.primary,
      borderRadius:8,
      alignContent:'center',
      justifyContent:'center',
      alignItems:'center'
    }
    
  })
  
  export default MyCart;
  