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

export default class Payment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Khalti", image:"https://dao578ztqooau.cloudfront.net/static/img/logo1.png"},
        {id:1, title: "e-Sewa", image:"https://laxmanbaralblog.com/wp-content/uploads/2019/12/eSewa-Nepal-App.png"},
        {id:2, title: "Visa Card", image:"https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo-2000-2006.png"} ,
        {id:3, title: "Master Card", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"} ,
        {id:4, title: "Google Pay", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQof9xqHPrv_EAlKsxKsOB7byn0bffNCuAGyg&usqp=CAU"} ,
        {id:5, title: "Cash on Receive", image:"https://www.collegenp.com/uploads/2021/05/Nepali-Rupees.jpg"} ,
        
      ]
    };
  }

  clickEventListener(item) {
    Alert.Alert(item.title)
  }

  render() {
    return (
        <>
      <Header title={'Payment Options'} />
      <View style={styles.container}>
          <View>
              <Headline2>Select your Payment Option</Headline2>
          </View>
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
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item.view)}}>
                <View style={styles.cardFooter}></View>
                <Image style={styles.cardImage} resizeMode='contain' source={{uri:item.image}}/>
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              
            )
          }}/>
      </View>
      <TouchableOpacity onPress={()=>navigate('mycart')} style={{marginRight:20,justifyContent:'flex-end',alignItems:'flex-end',alignContent:'flex-end'}}>
            <View style={styles.btn}>
            <Headline3> Cancel</Headline3>
            </View>
        </TouchableOpacity>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
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

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
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
  title:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
});   