import React, {useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Header from "./Components/Header";
import { navigate } from "../navigation/RootNav";
import { COLORS, SIZES } from '../constants';
import { GetRequest } from "../Config/axios";
import { API, CDN } from "../Config/var";

const Sales =()=> {

 
  function renderSales(){
    const renderItem= ({ item }) => {
        return(
          <TouchableOpacity >
                <View style={styles.eventBox}>
                
                  <View style={styles.eventDate}>
                     <Text  style={styles.eventDay}>{item.product_id}</Text>
                     <Text  style={styles.eventMonth}>##</Text>
                  </View>
                  
                  <View style={styles.eventContent}>
                  <View style={styles.image}>
                  <Image  source={{uri: `${CDN}/${item.image}?123=13`}} resizeMode='contain'  />
                  </View>
                  <View style={{marginLeft:10,width:170}}>
                  <Text  style={styles.Name}>{item.name}</Text>
                  <Text  style={styles.description}>Price :Rs.{item.price}</Text>
                  <Text  style={styles.rate}>Total Sales :Rs.{item.total}</Text>
                  </View>
                  <View style={{marginLeft:10,alignItems:'center'}}>
                  <Text>Quantity Sold</Text>
                      <Text style={{fontSize:24, color:'blue'}}>{item.total_qty}</Text>
                  </View>
                  </View>
                  
                </View>
              </TouchableOpacity>
        )

    }

    return (
      <View >
  
        <FlatList
          data={sales}
          vertical
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding  }}
        />
      </View>
      
    )}

    const [sales,setSales]= useState(false);
    useEffect(()=>{
    GetRequest(`${API}/get/item_report`,).then(res=>{
    setSales(res.data.content.data);
          console.log(res.data);
    })
    } 
    ,[])


    return (
      
      <>
     <Header title={'Sales Report'}/>
     
          
         <View style={styles.container}>
         {renderSales()}
         </View>

  
    </>

  )

};



  export default Sales;


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
 image: {
    width: 50,
    height:50,
    borderWidth:1,
    borderRadius:5
    
  },
  eventBox: {
    padding:10,
    marginTop:5,
    
    flexDirection: 'row',
  },
  eventDate:{
    flexDirection: 'column',
  },
  eventDay:{
    fontSize:50,
    color: COLORS.primary,
    fontWeight: "600",
  },
  eventMonth:{
    fontSize:16,
    color: COLORS.primary,
    fontWeight: "600",
  },
  eventContent: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft:10,
    backgroundColor: '#FFFFFF',
    padding:10,
    borderRadius:10
  },
  description:{
    fontSize:15,
    color: "#646464",
  },
  rate:{
    fontSize:18,
    color:"#151515",
  },
  Name:{
    fontSize:16,
    color:"#151515",
  },
});
