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
         {id:1,  name:'Burger', image: "https://bootdey.com/img/Content/avatar/avatar1.png"},
         {id:2, name:'Mo:Mo', image: "https://bootdey.com/img/Content/avatar/avatar6.png"},
         {id:3, name:'Burger', image: "https://bootdey.com/img/Content/avatar/avatar2.png"},
         {id:4, name:'Burger', image: "https://bootdey.com/img/Content/avatar/avatar3.png"},
         {id:5, name:'Burger', image: "https://bootdey.com/img/Content/avatar/avatar4.png"},
         {id:6, name:'Burger', image: "https://bootdey.com/img/Content/avatar/avatar1.png"},
         {id:7, name:'Burger', image: "https://bootdey.com/img/Content/avatar/avatar6.png"},
      ],
    };
  }

  render() {
    return (
      <>
      <Header title={'My Cart'} />
      <View>
                  
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
                  <Text  style={styles.name}>{item.name}</Text>
                  <Text  style={styles.discription}>Veg</Text>
                  <Text  style={styles.price}>$$100</Text>
                  

                    
                    {/* Quantity */}
                <View
                  style={{
                    position: 'absolute',
                   bottom:10,
                    width: 50,
                    height: 50,
                    paddingLeft:160,
                    flexDirection: 'row'
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: 30,
                      backgroundColor: COLORS.primary,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                      
                    }}
                    // onPress={() => editOrder("-", item.menuId, item.price)}
                  >
                    <Body1>-</Body1>
                  </TouchableOpacity>

                  <View
                    style={{
                      width: 40,
                      backgroundColor: COLORS.white,
                      borderRadius:6,
                      borderColor:COLORS.primary,
                      borderWidth:1,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Headline2>0</Headline2>
                  </View>

                  <TouchableOpacity
                    style={{
                      width: 30,
                      backgroundColor: COLORS.primary,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius:10,
                      
                    }}
                    // onPress={() => editOrder("+", item.menuId, item.price)}
                  >
                    <Body1>+</Body1>
                  </TouchableOpacity>
                  
                  <View
            style={{
              position: 'absolute',
              bottom: 60,
              right:-130,
              // backgroundColor: COLORS.white,
              // borderRadius: SIZES.radius,
              // borderColor:'blue',
              // borderWidth:2,
              // borderTopLeftRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
              
            }}
          >
            
            <TouchableOpacity onPress={()=>navigate('home')}> 
            <Image  style={styles.icon} source={icons.bin} />
            </TouchableOpacity>
            </View>
          {/* <View style={styles.icon}>
          <TouchableOpacity  onPress={()=>navigate('home')}>
          
          <Image  style={styles.icon} source={icons.bin} /> 
          </TouchableOpacity>

          </View> */}
        
                  {/* <TouchableOpacity >
                                    
                       <Image style={styles.icon} source={icons.bin} /> 
                      
                    </TouchableOpacity> */}
                </View>
              </View>
              </View>
              
            
            </View>
            
            
          )
        }}/></View>
        <View style={{marginTop:10,flexDirection:'row',width:SIZES.width,justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=>navigate('home')} style={{marginLeft:20,justifyContent:'flex-start',alignItems:'flex-start'}}>
            <View style={styles.btn}>
            <Headline3> Add More </Headline3>
            </View>
        </TouchableOpacity>
       

        <TouchableOpacity onPress={()=>navigate('payment')} style={{marginRight:20,justifyContent:'flex-end',alignItems:'flex-end',alignContent:'flex-end'}}>
            <View style={styles.btn}>
            <Headline3> Order</Headline3>
            </View>
        </TouchableOpacity>

        </View>
        </>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    height:550,
    backgroundColor: '#EEEEEE',
    
  },
  icon:{
    width:25,
    height:25,
   
  },
  btn: {
    height:50,
    width:100,
    backgroundColor:COLORS.primary,
    borderRadius:8,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center'
    
  },
  image: {
    width: 100,
    height:100
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
    width:20,
    flexDirection: 'column',
    paddingLeft:10
  },
  name: {
    fontSize:20,
    marginTop:10,
    color: '#333'
  },
  price: {
    fontSize:24,
    marginTop:10,
    color: 'green'
  },
  discription:{
    fontSize:12,
    marginTop:10,
    color: '#333'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop:10
  },
  
  iconFonts: {
    color: 'gray',
  },
  red: {
    color: '#FF4500',
  }
});
