import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Header from "./Components/Header";
import { navigate } from "../navigation/RootNav";
import { COLORS } from '../constants';

export default class MyTransactions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, day:1, qty:'10', price:'100', name:'Burger', month: 'Sep' ,image:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},
         {id:2, day:2, qty:'5', price:'100', name:'Pizza', month: 'Jan' ,image:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},
         {id:3, day:3, qty:'10', price:'100', name:'Samosa', month: 'Aug' ,image:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},
         {id:4, day:4, qty:'5', price:'100', name:'Burger', month: 'Dec' ,image:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},
         {id:5, day:5, qty:'10', price:'100', name:'Burger', month: 'Jul' ,image:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},
         {id:6, day:6, qty:'10', price:'100', name:'Burger', month: 'Oct' ,image:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},
         {id:7, day:7, qty:'10', price:'100', name:'Burger', month: 'Sep' ,image:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},
        {id:8, day:8, qty:'10', price:'100', name:'Burger', month: 'Jan' ,image:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},
        {id:9, day:9, qty:'10', price:'100', name:'Burger', month: 'May' ,image:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"},

      ],
    };
  }

  eventClickListener = (viewId) => {
    Alert.alert("alert", "event clicked");
  }

  render() {
    return (
        <>
      <Header title={'My Transactions'} />
      <View style={styles.container}>
        <FlatList 
          enableEmptySections={true}
          
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => this.eventClickListener("row")}>
                <View style={styles.eventBox}>
                
                  <View style={styles.eventDate}>
                     <Text  style={styles.eventDay}>{item.day}</Text>
                     <Text  style={styles.eventMonth}>{item.month}</Text>
                  </View>
                  
                  <View style={styles.eventContent}>
                      <View style={styles.image}>
                  <Image  source={{uri:item.image}} resizeMode='cover'/>
                  </View>
                  <View style={{marginLeft:10}}>
                  <Text  style={styles.Name}>{item.name}</Text>
                  <Text  style={styles.rate}>Rs.{item.price} x {item.qty}</Text>
                  <Text  style={styles.description}>Lorem ipsum dolor sit amet, elit consectetur</Text>
                  </View>
                  <View>
                      <Text>4000</Text>
                  </View>
                  </View>
                  
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: COLORS.secondary,
  },
 image: {
    width: 50,
    height:50,
    borderWidth:1
    
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
