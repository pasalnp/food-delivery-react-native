import React, { useEffect, useState } from "react";
import { Image, Text, View, ScrollView,StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Button, Portal } from "react-native-paper";
import { COLORS, SIZES,images, icons, Body3, Headline2, Body1, Body4, Headline1, Headline4 } from "../constants";
import Header from "./Components/Header";
import { navigate } from "../navigation/RootNav";
import { FloatingAction } from "react-native-floating-action";
import { GetRequest } from "../Config/axios";
import { API, CDN } from "../Config/var";

const Products= () =>{
  function onSelectCategory(category) {
    //filter restaurant
    let restaurantList = productsback.filter(a => a.category.includes(category.id))

    setProducts(restaurantList)

    setSelectedCategory(category)
  }
function renderMainCategories() {
  
  const renderItem = ({ item }) => {
    return (
      <View style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity
        style={{
          padding: 5,
         
          backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
          borderRadius: SIZES.radius,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 5,
          ...styles.shadow
        }}
        onPress={() => onSelectCategory(item)}
      >
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
          }}
        >
          <Image
            source={{uri: `${CDN}/${item.icon}` }}
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
            padding: 10,
            color: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.black,
          }}
        >
          {item.name}
        </Text>
        
      </View>
      
    )
  }

  


  return (
    <View style={{ padding: SIZES.padding * 2 }}>

      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: SIZES.padding  }}
      />
    </View>
    
  )
}

function renderProducts() {
  const renderItem = ({ item }) => {
    return (
      <ScrollView>
      <View
               style={{
                   paddingTop:10,
                   marginTop:10,
                   height:340, 
                   borderRadius:20,
                   backgroundColor:COLORS.white, 
                   alignItems: 'center' }}
                   >
                     {/* <Headline4>Available on {item.Avilday}</Headline4> */}
               <Image
                         source={{uri: `${CDN}/${item.image}`  }}
                         resizeMode='cover'
                         style={styles.image}
                       />
                       <View
                   style={{
                     position: 'absolute',
                     bottom: 140,
                     height: 40,
                     left:30,
                     width: SIZES.width * 0.2,
                     backgroundColor: COLORS.white,
                     borderRadius: SIZES.radius,
                     borderColor:'blue',
                     borderWidth:2,
                      borderTopLeftRadius: SIZES.radius,
                     alignItems: 'center',
                     justifyContent: 'center',
                    
                   }}
                 >
                   <Text style={{fontSize:10}}>Ready Time</Text>
                   <Text style={{fontSize:16,fontWeight:'Bold',paddingTop:5}}>{item.duration} Min.</Text>
                   
                   </View>
                     <View  style={{paddingLeft:20}}>
                     <View
                       style={{
                         width: SIZES.width,
                         marginTop: 10,
                         paddingHorizontal: SIZES.padding * 2
                       }}
                     >
                       <Headline2 style={{  fontSize:30  }}>{item.name}</Headline2>
                       <Headline2 style={{  fontSize:30 ,color:'red' }}>Rs.{item.price}</Headline2>
                       <Body4>{item.description}</Body4>
                     </View>
                    
                     <View
                   style={{
                     position: 'absolute',
                     bottom: 10,
                     right:40,
                     width: SIZES.width * 0.2,
                     borderTopLeftRadius: SIZES.radius,
                     alignItems: 'center',
                     justifyContent: 'center',
                    
                   }}
                 >
                   <TouchableOpacity onPress={()=>navigate('additems')}>
                   <Image
                         source={icons.edit}
                         style={{
                           width: 30,
                           height: 30,
                           marginLeft:15
                         }}
                       />
                    </TouchableOpacity>
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
                       }}>{item.calories} cal</Body3>
                     </View>
                     </View>
               </View>
               </ScrollView>
      

    )}
    return (
      <View style={{ height:400,padding: SIZES.padding  }}>
  
        <FlatList
          data={products}
          vertical
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding  }}
        />
      </View>
      
    )
}

const [selectedCategory,setSelectedCategory]= useState(false);
const [categories,setCategories]= useState(false);
const [products,setProducts]= useState(false);
const [productsback,setProductsback]= useState(false);
useEffect(()=>{
  GetRequest(`${API}/get/categoryData`,).then(res=>{
    setCategories(res.data.content.data);
    console.log(res.data);
  })  

GetRequest(`${API}/get/productData`,).then(res=>{
  setProducts(res.data.content.data);
  setProductsback(res.data.content.data);
  console.log(res.data);
})
}
,[])

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

  
    return(
        <>
       <Header title={'Products'}/>
            
           {renderMainCategories()}
           {renderProducts()}

    
    {/* floating Button */}
    <FloatingAction
     actions={actions}
     distanceToEdge={{ vertical: 60, horizontal: 20 }}
     onPressItem={(page)=> navigate(page)}
     color='red'    
   />
      </>

    )
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
  