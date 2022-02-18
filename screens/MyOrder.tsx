import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';
import {COLORS, SIZES,icons, images, Headline1, Headline2, Headline3,
  Headline4, Body1, Body2,
  Body3, Body4, Body5,  } from '../constants';
import Header from "./Components/Header";
import { navigate } from "../navigation/RootNav";

export default class MyCart extends Component<{}> {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [
         {id:1, image: "https://bootdey.com/img/Content/avatar/avatar1.png"},
         {id:2, image: "https://bootdey.com/img/Content/avatar/avatar6.png"},
         {id:3, image: "https://bootdey.com/img/Content/avatar/avatar2.png"},
         {id:4, image: "https://bootdey.com/img/Content/avatar/avatar3.png"},
         {id:5, image: "https://bootdey.com/img/Content/avatar/avatar4.png"},
         {id:6, image: "https://bootdey.com/img/Content/avatar/avatar1.png"},
         {id:7, image: "https://bootdey.com/img/Content/avatar/avatar6.png"},
      ],
    };
  }

  render() {
    return (
      <>
      <Header title={'My Orders'} />
      <View>
      <Headline1>Your Orders</Headline1> 
      <FlatList 
        style={styles.container} 
        enableEmptySections={true}
        data={this.state.data}
        keyExtractor= {(item) => {
          return item.id;
        }}
        renderItem={({item}) => {
          return (
            
            <View >
              <View style={styles.box}>
                <Image style={styles.image} source={{uri:item.image}} />
                <View style={styles.info}>
                  <Text  style={styles.name}>himalayan royal sticky pizza</Text>
                  <Text  style={styles.discription}>Veg</Text>
                  <Text  style={styles.discription}>Price</Text>
                  
                  
                
              </View>
              <View style={{marginRight:20,alignContent:'center', justifyContent:'center',alignItems:'center'}}>
              <Text style={styles.qty}>Qty</Text>
              <Text style={{fontSize:24,alignContent:'center',alignItems:'center',color:'red',justifyContent:'center'}} >52525</Text>
              </View>
              <View><Text style={styles.price}>$$10000</Text></View>
              </View>
              
            
            </View>
            
            
          )
        }}/>
        </View>
        <View style={styles.amount}>
           <Headline2> Your Total Amount</Headline2>
           <Headline1 > 10000</Headline1>
            </View>
        <TouchableOpacity style={{paddingRight:5,justifyContent:'flex-end',alignItems:'flex-end'}}>
            <View style={styles.cancel}>
            <Text>Cancel Order </Text>
            </View>
        </TouchableOpacity>
        </>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    height:400,
    backgroundColor: '#EEEEEE',
    
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
    marginTop:10,
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
});
