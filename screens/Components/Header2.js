import React from "react";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card } from "react-native-paper";
import { COLORS, Headline1, icons } from "../../constants";
import { navigate } from "../../navigation/RootNav";

const Header2 = ({title})=>{
    return(
<>
{/* <View style={styles.title}>
<Text style={styles.title}>{title} </Text>
</View> */}
<>       
       {/* <Header title={'Home'} />  */}
      <View style={{padding:10, marginTop:50,flexDirection: 'row', height: 80,justifyContent:'space-between' }}>
      <Headline1>{title}</Headline1>

        <TouchableOpacity onPress={()=>navigate('help')}
          style={{
            width: 50,
            alignItems:'flex-end',
            
          }}
        >
          <Image
            source={icons.like}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30
            }}
          />
        </TouchableOpacity>
      </View>
      </>
</>
    )
}


const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    header:{
        fontSize:18,
        backgroundColor:COLORS.primary,
        height:20
    },
    card: {
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginVertical: 20,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginBottom: 20
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
        backgroundColor:COLORS.primary,
        justifyContent:'center',
        alignContent:'center',
        textAlign:'center',
        marginTop:40
    
    

    },
    marginBottom: {
        marginBottom: 10
    },
    mapHeight: {
        height: 350,
        borderRadius: 5
    },
    orderContainer: {
        marginBottom: 20
    },
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
});
export default Header2;
