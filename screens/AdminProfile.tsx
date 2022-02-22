import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, SIZES } from '../constants';
import { navigate } from '../navigation/RootNav';

export default class AdminProfile extends Component {

  render() {
    return (
      <View style={styles.container}>
        {/*Header*/}
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

                <Text style={styles.name}>Sumir Shrestha </Text>
                <Text style={styles.userInfo}>sumirshr03@gmail.com </Text>
                <Text style={styles.userInfo}>Kathmandu </Text>
            </View>
            
            {/*Edit Button */}
            <TouchableOpacity >
              <View style={styles.editbtn}>
              <Text>Edit</Text>
              </View>
              </TouchableOpacity> 
            
          </View>

          {/* Body */}
          <View style={styles.body}>
            <TouchableOpacity onPress={()=>navigate('dashboard')}>
            <View style={styles.item}>
              <View >
            <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/cottage.png'}}/>
            </View>
            <View>
              <Text style={styles.info}>Dashboard</Text>
            </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.item}>
              <View >
            <Image style={styles.icon} source={{uri: 'https://cdn-icons-png.flaticon.com/512/945/945147.png'}}/>
            </View>
            <View>
              <Text style={styles.info}>Settings</Text>
            </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigate('login')}>
            <View style={styles.item}>
              <View >
            <Image style={styles.icon} source={{uri: 'https://cdn-icons-png.flaticon.com/512/1716/1716282.png'}}/>
            </View>
            <View>
              <Text style={styles.info}>Logout</Text>
            </View>
            </View>
            </TouchableOpacity>

          </View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        
      },
  header:{
    backgroundColor: COLORS.primary,
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:COLORS.white,
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:COLORS.white,
    fontWeight:'600',
  },
  editbtn:{
    height:30,
    width:60,
    marginRight:20,
    backgroundColor:COLORS.secondary, 
    marginBottom:10,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-end',
       
  },
  body:{
    backgroundColor: COLORS.secondary,
    height:500,
    alignItems:'flex-start',
  },
  item:{
    flexDirection : 'row',
    borderColor:COLORS.primary,
    borderWidth:2,
    borderRadius:6,
    marginTop:10,
    width:SIZES.width

  },
    
  icon:{
    width:40,
    height:40,
    paddingVertical:5,
    paddingLeft:10
   
  },
  info:{
    fontSize:24,
    color: "#FFFFFF",
   paddingTop:5,
  paddingLeft:10,
     justifyContent:'center'
  }
});
