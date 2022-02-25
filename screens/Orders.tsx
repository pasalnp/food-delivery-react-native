import React from "react";
import{View, Text, Image,StyleSheet} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {COLORS,icons,images, SIZES} from '../constants';
import { navigate } from "../navigation/RootNav";
import Header from "./Components/Header";
import ImageContainer from "./Components/ImageContainer";


const Orders = ({ navigation }) => {
    return (
       <>
       <Header title={'Orders'} />
       <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{padding:SIZES.padding}}>
           
                    <View style={styles.flex}>
                        <View style={styles.card}>
                            <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:24, paddingLeft:10,paddingBottom:10}} >Customer Name</Text>
                            <TouchableOpacity>
                                <Image source={icons.done}
                                style={{ marginTop:10,marginLeft:200,width: 20,height: 20}}/>
                            </TouchableOpacity>
                            </View>
                            <View style={{ paddingLeft:10, flexDirection:'row'}}>
                                <Image 
                                source={images.sushi}
                                style={{ width: 100,height: 100,borderColor:COLORS.darkgray, borderWidth:2, borderRadius:6}}/>
                                
                                <View style={{ paddingLeft:10, }}>
                                    <Text style={{fontSize:24}}>Item Name</Text>
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
                            <Text style={{fontSize:24, paddingLeft:10,paddingBottom:10}} >Customer Name</Text>
                            <View style={{ paddingLeft:10, flexDirection:'row'}}>
                                <Image 
                                source={images.sushi}
                                style={{ width: 100,height: 100,borderColor:COLORS.darkgray, borderWidth:2, borderRadius:6}}/>
                                
                                <View style={{ paddingLeft:10, }}>
                                    <Text style={{fontSize:24}}>Item Name</Text>
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
                            <Text style={{fontSize:24, paddingLeft:10,paddingBottom:10}} >Customer Name</Text>
                            <View style={{ paddingLeft:10, flexDirection:'row'}}>
                                <Image 
                                source={images.sushi}
                                style={{ width: 100,height: 100,borderColor:COLORS.darkgray, borderWidth:2, borderRadius:6}}/>
                                
                                <View style={{ paddingLeft:10, }}>
                                    <Text style={{fontSize:24}}>Item Name</Text>
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
                            <Text style={{fontSize:24, paddingLeft:10,paddingBottom:10}} >Customer Name</Text>
                            <View style={{ paddingLeft:10, flexDirection:'row'}}>
                                <Image 
                                source={images.sushi}
                                style={{ width: 100,height: 100,borderColor:COLORS.darkgray, borderWidth:2, borderRadius:6}}/>
                                
                                <View style={{ paddingLeft:10, }}>
                                    <Text style={{fontSize:24}}>Item Name</Text>
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
                            <Text style={{fontSize:24, paddingLeft:10,paddingBottom:10}} >Customer Name</Text>
                            <View style={{ paddingLeft:10, flexDirection:'row'}}>
                                <Image 
                                source={images.sushi}
                                style={{ width: 100,height: 100,borderColor:COLORS.darkgray, borderWidth:2, borderRadius:6}}/>
                                
                                <View style={{ paddingLeft:10, }}>
                                    <Text style={{fontSize:24}}>Item Name</Text>
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
                            <Text style={{fontSize:24, paddingLeft:10,paddingBottom:10}} >Customer Name</Text>
                            <View style={{ paddingLeft:10, flexDirection:'row'}}>
                                <Image 
                                source={images.sushi}
                                style={{ width: 100,height: 100,borderColor:COLORS.darkgray, borderWidth:2, borderRadius:6}}/>
                                
                                <View style={{ paddingLeft:10, }}>
                                    <Text style={{fontSize:24}}>Item Name</Text>
                                    <Text style={{paddingTop:30,fontSize:18}}>Qty</Text>
                                </View>
                                <View style={{ paddingLeft:70, paddingTop:30 }}>
                                <Text style={{fontSize:24, fontWeight:'bold'}}>$0000000</Text>
                                </View>
                                </View>
                               
                        </View>
                        
                       
                       
                    </View>
                    </View>
                    </ScrollView>
                   
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


   