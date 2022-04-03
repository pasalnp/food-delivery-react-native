import React, {useState,useEffect} from "react";
import{View, Text, Image,StyleSheet} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {COLORS,icons,images, SIZES} from '../constants';
import { navigate } from "../navigation/RootNav";
import Header from "./Components/Header";
import ImageContainer from "./Components/ImageContainer";
import { GetRequest, PostRequest } from "../Config/axios";
import { API, CDN } from "../Config/var";
import { FlatList, NativeBaseProvider } from "native-base";


const Orders = ({ navigation }) => {

    const passHandler = (id)=>{
        PostRequest(`${API}/editOrder`, {id:id,state:'Done'}).then((res)=>{
          alert(`Order Complete For ${id}`);})}

    function renderOrders(){
        const renderItem= ({ item }) => {
    return (
        <View style={{padding:10}}>
        <View style={styles.flex}>
            <View style={styles.card}>
                <View style={{flexDirection:'row'}}>
                <Text style={{width:250,fontSize:24, paddingLeft:10,paddingBottom:10}} >{item.fullname}</Text>
                <TouchableOpacity onPress={()=>passHandler(item.id)}>
                    <Image  source={icons.done}
                    style={{tintColor:'red', marginTop:10,marginLeft:10,width: 20,height: 20}}/>
                    <Text style={{fontSize:24,width:100}}>{item.state}</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={passHandler}>
                    <Image source={icons.done}
                    style={{ marginTop:10,marginLeft:20,width: 20,height: 20}}/>
                </TouchableOpacity> */}

                </View>
                <View style={{ paddingLeft:10, flexDirection:'row'}}>
                    <Image 
                    source={{uri: `${CDN}/${item.image}`}}
                    style={{ width: 100,height: 100,borderColor:COLORS.darkgray, borderWidth:2, borderRadius:6}}/>
                    
                    <View style={{ paddingLeft:10 }}>
                        <Text style={{fontSize:24,width:100}}>{item.name}</Text>
                        <Text style={{paddingTop:30,width:100,fontSize:18}}>{item.quantity}</Text>
                    </View>
                    <View style={{ paddingLeft:10, paddingTop:30 }}>
                    <Text style={{fontSize:24, fontWeight:'bold'}}>Rs. {item.price * item.quantity}</Text>
                    </View>
                    </View>
                   
            </View>
           
           
        </View>
           
        </View>

    )}


    return (
        <View style={{ height:600,padding: SIZES.padding * 2 }}>
    
          <FlatList
            data={orders}
            vertical
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            contentContainerStyle={{ paddingVertical: SIZES.padding  }}
          />
        </View>
        
      )}
      const [orders,setOrders]= useState(false);
      useEffect(()=>{
      GetRequest(`${API}/get/cart_orders`,).then(res=>{
      setOrders(res.data.content.data);
            console.log(res.data);
      })
      } 
      ,[])



      return (
       <>
       <NativeBaseProvider>
       <Header title={'Orders'} />
       {renderOrders()}
       </NativeBaseProvider>
                   
</>
        
        );
    }

       export default Orders;

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header:{
        fontSize:18,
        backgroundColor:COLORS.primary,
        height:20
    },
    card: {
        height:150,
        backgroundColor: COLORS.white,
        borderWidth:2,
        borderRadius: 5,
       borderColor:COLORS.primary
    },
    title: {
        height:60,
        padding:15,
        borderRadius:6,
        marginBottom: 15,
        borderColor:'#fff',
        color:'#fff',
        borderWidth:2,
        fontSize:25,
        backgroundColor:COLORS.primary
   
    },
    
    orderContainer: {
        marginBottom: 20
        ,flex:1
    }
    
});


   