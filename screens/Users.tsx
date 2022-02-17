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
import { COLORS } from '../constants';
import Header from './Components/Header';
import { navigate } from '../navigation/RootNav';

export default class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, name: "Mark Doe",   address:"US",                image:"https://bootdey.com/img/Content/avatar/avatar7.png"},
        {id:1, name: "John Doe",   address:"UK",                image:"https://bootdey.com/img/Content/avatar/avatar1.png"},
        {id:2, name: "Clark Man",  address:"Australia",         image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
        {id:3, name: "Jaden Boor", address:"Germany",           image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
        {id:4, name: "Srick Tree", address:"Nepal",             image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:5, name: "John Doe",   address:"India",             image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
        {id:6, name: "John Doe",   address:"Eraser",            image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
        {id:8, name: "John Doe",   address:"Nepal",             image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
        {id:9, name: "John Doe",   address:"Nepal",             image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:9, name: "John Doe",   address:"India",             image:"https://bootdey.com/img/Content/avatar/avatar7.png"} ,
      ]
    };
  }

  clickEventListener(item) {
    Alert.alert(item.name)
  }

  render() {
    return (
        <>
       <Header title={'Users'} />
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
                
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                {/* <View style={styles.cardHeader}>
                  <Image style={styles.icon} source={{uri:"https://img.icons8.com/flat_round/64/000000/hearts.png"}}/>
                </View> */}
                <Image style={styles.userImage} source={{uri:item.image}}/>
                <View style={styles.cardFooter}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.address}>{item.address}</Text>
                    <TouchableOpacity style={styles.detailsbtn} onPress={()=> this.clickEventListener(item)}>
                      <Text style={styles.followButtonText}>Details</Text>  
                    </TouchableOpacity>
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
    flex:1,
    marginTop:10,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
   alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    borderRadius:6,

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor:"white",
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  cardFooter: {
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
  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage:{
    marginTop:10,  
    height: 120,
    width: 120,
    borderRadius:60,
    alignSelf:'center',
    borderColor:"#DCDCDC",
    borderWidth:3,
  },
  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"red",
    fontWeight:'bold'
  },
  address:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    
  },
  detailsbtn: {
    marginTop:10,
    height:35,
    width:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: COLORS.primary,
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  icon:{
    height: 20,
    width: 20, 
  }
});    