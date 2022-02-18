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
        {id:1, day:1, month: 'Sep' ,Image:"https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2018/others/nepali_1530237949-1000x0_1539049022.jpg&w=900&height=601"},
         {id:2, day:2, month: 'Jan' ,Image:"https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2018/others/nepali_1530237949-1000x0_1539049022.jpg&w=900&height=601"},
         {id:3, day:3, month: 'Aug' ,Image:"https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2018/others/nepali_1530237949-1000x0_1539049022.jpg&w=900&height=601"},
         {id:4, day:4, month: 'Dec' ,Image:"https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2018/others/nepali_1530237949-1000x0_1539049022.jpg&w=900&height=601"},
         {id:5, day:5, month: 'Jul' ,Image:"https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2018/others/nepali_1530237949-1000x0_1539049022.jpg&w=900&height=601"},
         {id:6, day:6, month: 'Oct' ,Image:"https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2018/others/nepali_1530237949-1000x0_1539049022.jpg&w=900&height=601"},
         {id:7, day:7, month: 'Sep' ,Image:"https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2018/others/nepali_1530237949-1000x0_1539049022.jpg&w=900&height=601"},
        {id:8, day:8, month: 'Jan' ,Image:"https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2018/others/nepali_1530237949-1000x0_1539049022.jpg&w=900&height=601"},
        {id:9, day:9, month: 'May' ,Image:"https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2018/others/nepali_1530237949-1000x0_1539049022.jpg&w=900&height=601"},

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
                  <Image  source={{uri:item.image}} resizeMode='contain'  />
                  </View>
                  <View style={{marginLeft:10}}>
                  <Text  style={styles.Name}>Burger</Text>
                  <Text  style={styles.rate}>Rs.400</Text>
                  <Text  style={styles.description}>Lorem ipsum dolor sit amet, elit consectetur</Text>
                  </View>
                  <View>
                      <Text>5000</Text>
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
