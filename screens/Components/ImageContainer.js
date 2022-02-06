import React from "react";
import {
    View,
    Text,
    Image
  } from "react-native";
import { images } from "../../constants";
 
  const ImageContainer= ({ source }) => {
    return (
        <View style={{ height:50, weight:50, borderColor:'grey', borderRadius:6, borderWidth:2 }}>
        <Image
        source={source}
        resizeMode='contain'
        style={{height:50, width:50}}
        />
        </View>
    );
  }

        export default ImageContainer;