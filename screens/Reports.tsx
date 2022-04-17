import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import { COLORS, Headline2, Headline3 } from '../constants';
import Header from './Components/Header';
import { navigate } from "../navigation/RootNav";

export default class Reports extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Sales", name:"Sales"},
        {id:2, title: "Orders",  name:"Orders"},
      ],
      // reports:[
      //   {id:1, title: "Total ", value:"9600"},
      //   {id:1, title: "Pending Orders", value:"4300"},
      //   {id:2, title: "Cancelled Orders",  value:"5300"},
      // ]
    };
  }

  clickEventListener(item) {
    Alert.Alert(item.title)
  }

  render() {
    return (
        <>
      <Header title={'Dashboard'} />
      <Headline2>Reports</Headline2>
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={()=>navigate(item.title)}>
                <View style={styles.cardFooter}></View>
                <Text style={styles.title} >{item.name}</Text>
                <View style={styles.cardHeader}>
                 
                </View>
              </TouchableOpacity>
              
            )
          }}/>
           <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.reports}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <View style={styles.card} onPress={()=>navigate(item.title)}>
                
                <Text style={{fontSize:24,alignSelf:'center'}} >{item.title}</Text>
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.name}>Rs.{item.value}</Text>
                  </View>
                </View>
              </View>
              
            )
          }}/>
      {/* <Headline2>Reports</Headline2> */}
      </View>
      
      </>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  list: {
    paddingHorizontal: 0,
    backgroundColor:"#E6E6E6",
  },

  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',

    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 0,
    marginVertical: 5,
    backgroundColor:"white",
    flexBasis: '42%',
    marginHorizontal: 10,
    borderRadius:10,
    borderColor:COLORS.primary,
    borderWidth:2
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 10,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 100,
    width: 100,
    alignSelf:'center'
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
  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
  title:{
    fontSize:38,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
});   