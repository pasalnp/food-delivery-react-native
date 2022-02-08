import React from "react";
import {
    View,
    Text,
    Image
  } from "react-native";
import { images } from "../../constants";
 
  const ImageContainer= ({ source }) => {
    return (
        <View >
        <Image
        source={source}
        resizeMode='cover'
        style={{height:50, width:50,borderRadius:6,borderColor:'grey',borderWidth:3}}
        />
        </View>
    );
  }

        export default ImageContainer;