import React, { useEffect, useState} from 'react';
import {
  Platform,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';
import {COLORS, SIZES,icons, images, Headline1, Headline2 } from '../constants';
import Header from "./Components/Header";
import { navigate } from "../navigation/RootNav";
import { GetRequest } from "../Config/axios";
import { API, CDN } from "../Config/var";


const MyOrders=()=>{
  const [user_id,setUserId] = useState();
  const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('user_id')
    if(value !== null) {
      // value previously stored
      setUserId(value)
      console.log(value)
    }
  } catch(e) {
    console.log(e);
    
    // error reading value
  }
}
useEffect(()=>{
  getData();
},[])
  function renderOrders(){
    const renderItem= ({ item }) => {
        return(
          <View>
              <View style={styles.box}>
                <Image style={styles.image} source={{uri: `${CDN}/${item.image}` }} />
                <View style={styles.info}>
                  <Text  style={styles.name}>{item.name}</Text>
                  <Text  style={styles.discription}>{item.description}</Text>
                  <Text  style={styles.discription}>Rs. {item.price}</Text>
                  
                  
                
              </View>
              <View style={{marginRight:20,alignContent:'center', justifyContent:'center',alignItems:'center'}}>
              <Text style={styles.qty}>Qty</Text>
              <Text style={{fontSize:24,alignContent:'center',alignItems:'center',color:'red',justifyContent:'center'}} >{item.quantity}</Text>
              </View>
              <View><Text style={styles.price}>Rs.{item.price}</Text></View>
              </View>
              
            
            </View>

        )

    }

    return (
      <View style={{ padding: SIZES.padding * 2 }}>
  
        <FlatList
          data={item}
          vertical
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding  }}
        />
      </View>
      
    )}

      const [products,setProducts]= useState([]);
      const [total,setTotal]= useState(0);
      const [item,setItem]= useState(false);
      useEffect(()=>{
      GetRequest(`${API}/get/cart_orders`,).then(res=>{
      setProducts(res.data.content.data);
            console.log("data_____",res.data);
      })
      } 
      ,[])
        useEffect(()=>{
          let t=0;
          let i = products?.filter(data=>data.ID==3)
          setItem(i);
        products?.filter(data=>data.ID==3).map((val)=> t = parseInt(t) + parseInt(val.price));
        setTotal(t)
        }
        ,[products])
    
   

    return (
      
              <>
             <Header title={'My Orders'}/>
             
                  
                 <View style={styles.container}>
                 {renderOrders()}
                 </View>
        <View style={styles.amount}>
           <Headline2> Your Total Amount</Headline2>
           <Headline1 > {total}</Headline1>
            </View>
        {/* <TouchableOpacity style={{paddingRight:5,justifyContent:'flex-end',alignItems:'flex-end'}}>
            <View style={styles.cancel}>
            <Text>Cancel Order </Text>
            </View>
        </TouchableOpacity> */}
          
            </>
      
          )
        
        };
  export default MyOrders;


const styles = StyleSheet.create({
  container: {
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
    paddingTop:30
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
  amount:{
    margin:10,
    padding:10,
    height:100,
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
});
