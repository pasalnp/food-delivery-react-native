import React from "react";
import { Image, Text, View, _ScrollView,StyleSheet } from "react-native";
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Portal } from "react-native-paper";
import { COLORS, SIZES,images, icons, Body3, Headline2, Body1, Body4, Headline1 } from "../constants";
import Header from "./Components/Header";



const Products= () =>{
    return(
        <>
       <Header title={'Products'}/>
            
           <View style={{padding:10,flex:1,backgroundColor:COLORS.secondary}}> 

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
<View
 style={{
    paddingTop:15,
    
        }}
    >
        <View>
            <Headline1>Products</Headline1>
        </View>

  
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
                  style={{
                    paddingTop:50,
                    width: 300,
                    height: 200,
                    borderColor:'black',
                    borderRadius:6,
                    borderWidth:2
                
                  }}
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

        
        </View>
        
        {/* Add Button */}
        <Portal>
        <TouchableOpacity style={{height:50,width:50,top:50, right:50,borderRadius:25,backgroundColor:'red'}}>
        <View style={{alignContent:'center',justifyContent:'center',marginVertical:8,marginHorizontal:3}}>
             <Text style={{fontSize:30,color:'black'}}>ADD</Text>
                
                </View>
        </TouchableOpacity>
        </Portal>
        
        
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
  