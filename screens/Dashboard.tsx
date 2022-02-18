 import React from "react";
 import{View, Text, Image,StyleSheet} from "react-native";
 import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
 import {COLORS,images, SIZES} from '../constants';
import { navigate } from "../navigation/RootNav";
 import Header from "./Components/Header";
 import ImageContainer from "./Components/ImageContainer";


 const Dashboard = ({ navigation }) => {
     return (
        <>
        <Header title={'Dashboard'} />
        <ScrollView>
        <TouchableOpacity onPress={()=>navigate('orders')}>
            <Text style={{fontSize:32, color:COLORS.primary, fontWeight:'bold'}}>Orders</Text>
            </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate('orders')}>
         <View  style={{height:340,borderColor:'black',borderWidth:2,borderRadius:6, backgroundColor:COLORS.secondary}}>
        <ScrollView showsVerticalScrollIndicator={false}>
         <View style={{padding:SIZES.padding}}>
            
                     <View style={styles.flex}>
                         <View style={styles.card}>
                             <Text style={{fontSize:24, paddingLeft:10,paddingBottom:10}} >Customer Name</Text>
                             <View style={{ paddingLeft:10, flexDirection:'row'}}>
                                 <Image 
                                 source={images.sushi}
                                 style={{ width: 100,height: 100,borderColor:COLORS.darkgray, borderWidth:2, borderRadius:6}}/>
                                 
                                 <View style={{ paddingLeft:10, }}>
                                     <Text style={{fontSize:24}}>Item Name</Text>
                                     <Text style={{paddingTop:10,fontSize:18}}>Price</Text>
                                     <Text style={{paddingTop:30,fontSize:18}}>Qty</Text>
                                 </View>
                                 <View style={{ paddingLeft:70, paddingTop:30 }}>
                                 <Text style={{fontSize:24, fontWeight:'bold'}}>$0000000</Text>
                                 </View>
                                 </View>
                                
                         </View>
                        
                        
                     </View>
                         
                     </View>

                     <View style={{padding:SIZES.padding}}>
                     <View style={styles.flex}>
                         <View style={styles.card}>
                             <Text style={{fontSize:24,paddingLeft:10, paddingBottom:10}} >Customer Name</Text>
                             <View style={{ paddingLeft:10, flexDirection:'row'}}>
                                 <Image 
                                 source={images.sushi}
                                 style={{ width: 100,height: 100,borderColor:COLORS.darkgray, borderWidth:2, borderRadius:6}}/>
                                 
                                 <View style={{ paddingLeft:10, }}>
                                     <Text style={{fontSize:24}}>Item Name</Text>
                                     <Text style={{paddingTop:30,fontSize:18}}>Qty</Text>
                                 </View>
                                 <View style={{ paddingLeft:70, paddingTop:30 }}>
                                 <Text style={{fontSize:24}}>$0000000</Text>
                                 </View>
                                 </View>
                                
                         </View>
                         
                        
                        
                     </View>
                     </View>

                     
                     </ScrollView>
                     </View>
                     </TouchableOpacity>
                     <View>
                         
                     </View>
                     </ScrollView>
</>
         
         );
     }

        export default Dashboard;

 const styles = StyleSheet.create({
     flex: {
         flex: 1,
         backgroundColor: 'white'
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


    