import React from "react";
import{View, Text, Image,StyleSheet} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {COLORS,images, SIZES} from '../constants';
import Header from "./Components/Header";
import ImageContainer from "./Components/ImageContainer";


const MyOrders = ({ navigation }) => {
    return (
       <>
       <Header title={'My Orders'}/>
       <ScrollView showsVerticalScrollIndicator={false} >
        <View style={{padding:SIZES.padding}}>
                    <View style={styles.flex}>
                        <View style={styles.card}>
                        
                            <View style={{padding:10, flexDirection:'row'}}>
                                <Image 
                                source={images.sushi}
                                style={{ width: 80,height: 80,borderColor:COLORS.darkgray, borderWidth:2, borderRadius:6}}/>
                                
                                <View style={{ paddingLeft:10, }}>
                                    <Text style={{fontSize:24}}>Item Name</Text>
                                    <Text style={{paddingTop:20,fontSize:18}}>Qty   :</Text>
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

       export default MyOrders;

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: '#fff'
    },
    
    card: {
        height:105,
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
    
});


   