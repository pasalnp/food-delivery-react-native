import React from "react";
import { Image, Text, View, ScrollView,StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Button, Portal } from "react-native-paper";
import { COLORS, SIZES,images, icons, Body3, Headline2, Body1, Body4, Headline1 } from "../constants";
import Header from "./Components/Header";
import { navigate } from "../navigation/RootNav";
import { FloatingAction } from "react-native-floating-action";



const Products= () =>{

  const actions = [
    {
      text: "Item",
      icon: {uri:'https://as2.ftcdn.net/v2/jpg/03/54/21/57/1000_F_354215740_kiwMAPNUZREM73k2PvAvay4QeuRE351d.jpg'},
      name: "bt_accessibility",
      color:'red',
      position: 2
    },
    {
      text: "Category",
      icon: {uri:'https://as2.ftcdn.net/v2/jpg/03/54/21/57/1000_F_354215740_kiwMAPNUZREM73k2PvAvay4QeuRE351d.jpg'},
      name: "bt_language",
      color:'red',
      position: 1
    }
  ];
    return(
        <>
       <Header title={'Products'}/>
            
           <View style={{padding:5,flex:1,backgroundColor:COLORS.secondary}}> 
        
           <View style={{flexDirection:'row'}}>
               <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
           <TouchableOpacity
            style={{
            width:70,
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:COLORS.primary,
            borderRadius: SIZES.radius,
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
              justifyContent: "center",
              backgroundColor: COLORS.white 
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

          <Text
            style={{
              fontSize: 12,
              padding: 10,
              color: COLORS.white,
            }}
          >hbsh
           
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
            style={{
            width:70,
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:COLORS.primary,
            borderRadius: SIZES.radius,
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
              justifyContent: "center",
              backgroundColor: COLORS.white 
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

          <Text
            style={{
              fontSize: 12,
              padding: 10,
              color: COLORS.white,
            }}
          >hbsh
           
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{
            width:70,
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:COLORS.primary,
            borderRadius: SIZES.radius,
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
              justifyContent: "center",
              backgroundColor: COLORS.white 
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

          <Text
            style={{
              fontSize: 12,
              padding: 10,
              color: COLORS.white,
            }}
          >hbsh
           
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{
            width:70,
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:COLORS.primary,
            borderRadius: SIZES.radius,
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
              justifyContent: "center",
              backgroundColor: COLORS.white 
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

          <Text
            style={{
              fontSize: 12,
              padding: 10,
              color: COLORS.white,
            }}
          >hbsh
           
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{
            width:70,
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:COLORS.primary,
            borderRadius: SIZES.radius,
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
              justifyContent: "center",
              backgroundColor: COLORS.white 
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

          <Text
            style={{
              fontSize: 12,
              padding: 10,
              color: COLORS.white,
            }}
          >hbsh
           
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{
            width:70,
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:COLORS.primary,
            borderRadius: SIZES.radius,
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
              justifyContent: "center",
              backgroundColor: COLORS.white 
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

          <Text
            style={{
              fontSize: 12,
              padding: 10,
              color: COLORS.white,
            }}
          >hbsh
           
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{
            width:70,
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:COLORS.primary,
            borderRadius: SIZES.radius,
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
              justifyContent: "center",
              backgroundColor: COLORS.white 
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

          <Text
            style={{
              fontSize: 12,
              padding: 10,
              color: COLORS.white,
            }}
          >hbsh
           
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{
            width:70,
            padding: SIZES.padding,
            paddingBottom: SIZES.padding * 2,
            backgroundColor:COLORS.primary,
            borderRadius: SIZES.radius,
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
              justifyContent: "center",
              backgroundColor: COLORS.white 
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

          <Text
            style={{
              fontSize: 12,
              padding: 10,
              color: COLORS.white,
            }}
          >hbsh
           
          </Text>
        </TouchableOpacity>
        </ScrollView>
        </View>


<View style={{paddingTop:10 }} >
  
        <View>
            <Headline1>Products</Headline1>
        </View>
        <ScrollView style={{height:420}}>
        <TouchableOpacity style={{paddingTop:10}}>
        <View
        style={{
            paddingTop:10,
            height:300, 
            borderRadius:6,
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
                  width: SIZES.width,
                  alignItems: 'center',
                  marginTop: 15,
                  paddingHorizontal: SIZES.padding * 2
                }}
              >
                <Headline2 style={{  fontSize:30 ,textAlign: 'center' }}>Himalayan Burger</Headline2>
                <Body4>fresh vegetables, meat plate, sauce</Body4>
              </View>

              {/* Calories */}
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10
                }}
              >
                <Image
                  source={icons.fire}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10
                  }}
                />

                <Body3 style={{
                  color: COLORS.darkgray
                }}>50 cal</Body3>
              </View>
              
        </View>

        </TouchableOpacity>
        <TouchableOpacity style={{paddingTop:10}}>
        <View
        style={{
            paddingTop:10,
            height:300, 
            borderRadius:6,
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
                  width: SIZES.width,
                  alignItems: 'center',
                  marginTop: 15,
                  paddingHorizontal: SIZES.padding * 2
                }}
              >
                <Headline2 style={{  fontSize:30 ,textAlign: 'center' }}>Himalayan Burger</Headline2>
                <Body4>fresh vegetables, meat plate, sauce</Body4>
              </View>

              {/* Calories */}
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10
                }}
              >
                <Image
                  source={icons.fire}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 10
                  }}
                />

                <Body3 style={{
                  color: COLORS.darkgray
                }}>50 cal</Body3>
              </View>
              
        </View>

        </TouchableOpacity>
        </ScrollView>
        
        </View>

        {/* Add Button */}

        
        <FloatingAction
    actions={actions}
    onPressItem={()=>navigate('addcategory')}
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
    width: 300,
    height: 200,
    borderColor:'black',
    borderRadius:6,
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
  