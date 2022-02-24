import React, { useState } from "react";
import { Image, Text, View, ScrollView,StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Button, Portal } from "react-native-paper";
import { COLORS, SIZES,images, icons, Body3, Headline2, Body1, Body4, Headline1, Headline4 } from "../constants";
import Header from "./Components/Header";
import { navigate } from "../navigation/RootNav";
import { FloatingAction } from "react-native-floating-action";



const Products= () =>{
const [selectedCategory,setSelectedCategory]= useState(false);
  const actions = [
   
    {
      text: "Category",
      icon: icons.addcategory,
      name: "addcategory",
      color:'#FF8208',
      position: 2,
      
  
    },
    {
      text: "Item",
      icon: icons.additem,
      name: "additems",
      color:'#FF8208',
      position: 1,
    }
  ];

  const categoryData = [
    {
  id: 1,
  name: "Rice",
  icon: icons.rice_bowl,
},
{
  id: 2,
  name: "Noodles",
  icon: icons.noodle,
},
{
  id: 3,
  name: "Hot Dogs",
  icon: icons.hotdog,
},
{
  id: 4,
  name: "Salads",
  icon: icons.salad,
},
{
  id: 5,
  name: "Burgers",
  icon: icons.hamburger,
},
{
  id: 6,
  name: "Pizza",
  icon: icons.pizza,
},
{
  id: 7,
  name: "Snacks",
  icon: icons.fries,
},
{
  id: 8,
  name: "Sushi",
  icon: icons.sushi,
},
{
  id: 9,
  name: "Desserts",
  icon: icons.donut,
},
{
  id: 10,
  name: "Drinks",
  icon: icons.drink,
},

]
    return(
        <>
       <Header title={'Products'}/>
            
           <View style={{padding:5,flex:1,backgroundColor:COLORS.secondary}}> 
        
           <View style={{flexDirection:'row'}}>
               <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                 <View style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
           <TouchableOpacity
           onPress={()=>setSelectedCategory(!selectedCategory)}
            style={{
            width:70,
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor: (selectedCategory) ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius * 2,
            alignItems: "center",
            justifyContent: "center",
            marginRight: SIZES.padding,
            ...styles.shadow
          }}
          
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              alignContent:'center',
              justifyContent: "center",
              backgroundColor: (selectedCategory) ? COLORS.white : COLORS.primary,
            }}
          >
            <Image
              source={icons.hotdog}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30
              }}
            />
          </View>

          
        </TouchableOpacity>
        <Text
            style={{
              fontSize: 12,
             alignContent:'center',
              color: (selectedCategory) ? COLORS.primary : COLORS.white,
            }}
          >Chowmin
           
          </Text>

          </View>
        
        </ScrollView>
        </View>


<View style={{paddingTop:0 }} >
  
        <View>
            <Headline1>Products</Headline1>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{height:420}}>
        <TouchableOpacity style={{paddingTop:10}}>
        <View
        style={{
            paddingTop:10,
            height:320, 
            borderRadius:20,
            backgroundColor:COLORS.white, 
            alignItems: 'center' }}
            >
        <Image
                  source={images.burger_restaurant_1}
                  resizeMode='cover'
                  style={styles.image}
                />
                <View
            style={{
              position: 'absolute',
              bottom: 120,
              height: 40,
              left:40,
              width: SIZES.width * 0.2,
              backgroundColor: COLORS.white,
              borderRadius: SIZES.radius,
              borderColor:'blue',
              borderWidth:2,
              // borderTopLeftRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
              
            }}
          >
            <Text style={{fontSize:10}}>Will be Ready In</Text>
            <Headline4>10-15</Headline4>
            </View>
              <View>
              <View
                style={{
                  width: SIZES.width,
                  
                  marginTop: 10,
                  paddingHorizontal: SIZES.padding * 2
                }}
              >
                <Headline2 style={{  fontSize:30  }}>Himalayan Burger</Headline2>
                <Headline2 style={{  fontSize:30 ,color:'red' }}>Rs.500</Headline2>
                <Body4>fresh vegetables, meat plate, sauce</Body4>
              </View>
              <View
            style={{
              position: 'absolute',
              bottom: 10,
              
              right:40,
              width: SIZES.width * 0.2,
             
              // borderTopLeftRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
              
            }}
          >
            <Image
                  source={icons.edit}
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft:15
                  }}
                />
            
            </View>

              {/* Calories */}
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 5
                }}
              >
                <Image
                  source={icons.fire}
                  style={{
                    width: 15,
                    height: 15,
                    marginLeft:15
                  }}
                />

                <Body3 style={{
                  color: COLORS.darkgray
                }}>50 cal</Body3>
              </View>
              </View>
        </View>

        </TouchableOpacity>
        
        </ScrollView>
        
        </View>

        {/* Add Button */}

        
        <FloatingAction
    actions={actions}
    distanceToEdge={{ vertical: 60, horizontal: 20 }}
    onPressItem={(page)=> navigate(page)}
    color='red'
       
                                     
        
    
      
    
  />


         {/* <TouchableOpacity onPress={()=>navigate('additems')} style={styles.touchableopacity}>
        <View style={{}}>
             <Text style={{borderRadius:25,backgroundColor:'red',fontSize:30}}>ADD</Text>
                
                 </View> 
        </TouchableOpacity>  */}

      
        
        </View>

          

        </>
    );
}

export default Products;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.lightGray4
    },
    touchableopacity:{ 
      position:'absolute',
    height:100,
    width:100,
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
  image:{
    paddingTop:50,
    width:"90%",
    height: 200,
    borderColor:'black',
    borderRadius:20,
    borderWidth:2
  },
  icon:{
    color:'red'
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  }
  })
  