import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
import { COLORS } from "../constants";
import Header from "./Components/Header";

const MyCart = ({ navigation }) => {
//   componentWillMount() {
//     let TotalAmount = 0;
//     for (var i = 0; i < this.state.cart.length; i++) {
//       TotalAmount =
//         TotalAmount +
//         this.state.cart[i].ItemQuantity * this.state.cart[i].ItemPrice;
//     }
//     this.setState({ TotalAmount: TotalAmount });
//   }
//   delete = ItemKey => {
//     let cart = this.state.cart;
//     for (var i = 0; i < cart.length; i++) {
//       if (cart[i].ItemKey === ItemKey) {
//         this.setState({
//           TotalAmount:
//             this.state.TotalAmount -
//             this.state.cart[i].ItemQuantity * this.state.cart[i].ItemPrice
//         });
//         cart.splice(i, 1);
//         break;
//       }
//     }
//     this.setState({ cart: cart });
//   };
//   constructor(props) {
//     super(props);
//     this.state = {
//       cart: this.props.navigation.getParam("cart"),
//       TotalAmount: 0
//     };
//   }

 
    return (
    <>
    <Header title={'My Cart'} />
      <View style={styles.container}>
        <ScrollView>

        {/* HEADER */}
        {/* <View
          style={{
            backgroundColor: "white",
            width: "100%",
            height: 60,
            flexDirection: "row",
            marginTop: "6.5%",
            borderBottomWidth: 0.6,
            borderBottomColor: "black"
          }}
        >
          
            <Ionicons
              name="md-arrow-back"
              size={30}
              color="#404040"
              style={{ paddingTop: 12, paddingLeft: "9%" }}
            //   onPress={() =>
            //     this.props.navigation.navigate("Store", {
            //       cart: this.state.cart
            //     })
            //   }
            />
          
          <View
            style={{
              borderBottomWidth: 0.8,
              height: 33,
              width: "33%",
              borderTopWidth: 0.8,
              padding: 0,
              marginTop: 12,
              marginLeft: "16%"
            }}
          >
            <Text
              style={{ fontSize: 20, color: "#404040", textAlign: "center" }}
            >
              My Cart
            </Text>
          </View>
          <MaterialCommunityIcons
            name="cart"
            size={30}
            color="black"
            size={30}
            style={{ paddingTop: 12, paddingLeft: "20%" }}
          />
        </View> */}

        {/* Table Header */}
        <View
          style={{
            borderColor: COLORS.primary,
            borderWidth: 0.6,
            flexDirection: "row",
            height: 30,
            backgroundColor: COLORS.secondary
          }}
        >
          <View
            style={{
              width: "48%",
              borderColor:COLORS.primary,
              borderRightWidth: 0.6,
              borderLeftWidth:0.6
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                color: COLORS.black,
                marginTop: 3
              }}
            >
              Item Name
            </Text>
          </View>
          <View style={{ borderRightWidth: 0.6,borderColor:COLORS.primary, width: "18%" }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                color:COLORS.black,
                marginTop: 3
              }}
            >
              Quantity
            </Text>
          </View>
          <View style={{ borderRightWidth: 0.6,borderColor:COLORS.primary, width: "12%" }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                color: COLORS.black,
                marginTop: 3
              }}
            >
              Rate
            </Text>
          </View>
          <View style={{ width: "22%" }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                color: COLORS.black,
                marginTop: 3
              }}
            >
              Total
            </Text>
          </View>
        </View>

        {/* Table Contents */}
        <ScrollView>
          {/* {this?.state?.cart.map(cart => {
            return ( */}
              <View
                // key={cart.ItemKey}
                style={{
                  borderBottomColor: COLORS.primary,
                  borderBottomWidth: 0.6,
                  backgroundColor:COLORS.white,
                  flexDirection: "row",
                  height: 30
                }}
              >
                <View
                  style={{
                    width: "48%",
                    borderColor:COLORS.primary,
                    borderRightWidth: 0.6,
                    borderLefttWidth: 0.6
                  }}
                >
                  <Text
                    style={{ textAlign: "center", fontSize: 14, marginTop: 3 }}
                  >ggyjcgyugcucuyuy cygcvgcy bcuagcu
                    {/* {cart.ItemName} */}
                  </Text>
                </View>
                <View style={{ borderRightWidth: 0.6, borderColor:COLORS.primary,width: "18%" }}>
                  <Text
                    style={{ textAlign: "center", fontSize: 12, marginTop: 3 }}
                  >
                    {/* {cart.ItemQuantity} */}
                  </Text>
                </View>
                <View style={{ borderRightWidth: 0.6,borderColor:COLORS.primary, width: "12%" }}>
                  <Text
                    style={{ textAlign: "center", fontSize: 12, marginTop: 3 }}
                  >
                    {/* ${cart.ItemPrice} */}
                  </Text>
                </View>
                <View style={{ width: "12%" }}>
                  <Text
                    style={{ textAlign: "center", fontSize: 12, marginTop: 3 }}
                  >
                    {/* ${cart.ItemQuantity * cart.ItemPrice} */}
                  </Text>
                </View>
                {/* <MaterialIcons
                  name="delete"
                  size={23}
                  color="black"
                  style={{ marginLeft: 5 }}
                  onPress={() => {
                    this.delete(cart.ItemKey);
                  }}
                /> */}
              </View>
            {/* );
          } */}
          
        </ScrollView>

        

        {/* Table Footer */}
        <View
          style={{
            borderColor: COLORS.primary,
            borderTopWidth: 0.6,
            borderBottomWidth: 0.6,
            flexDirection: "row",
            height: 30,
            marginTop:1,
            backgroundColor: COLORS.white
          }}
        >
          <View
            style={{
              width: "48%",
              borderColor:COLORS.primary,
              borderRightWidth: 0.6,
              
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                color:COLORS.black,
                marginTop: 3
              }}
            >
              Final Amount
            </Text>
          </View>
          <View style={{ borderRightWidth: 0.6,borderColor:COLORS.primary, width: "52%" }}>
            <Text 
              style={{
                textAlign: "center",
                fontSize: 20,
                color: COLORS.black,
                marginTop: 3
              }}
            >Rs. 145646
              {/* $ {this.state.TotalAmount} */}
            </Text>
          </View>
        </View>
        {/* CHECKOUT */}

        <TouchableOpacity
          style={{
            borderRightWidth: 0.6,
            borderLeftWidth: 0.6,
            borderTopWidth: 0.6,
            backgroundColor: COLORS.primary,
            width: "70%",
            height: 30,
            borderRadius: 7,
            paddingTop: 5,
            marginLeft: "16%",
            marginTop:10
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold"
              }}
            >
              CHECKOUT
            </Text>
            <FontAwesome
              name="arrow-right"
              size={20}
              color="white"
              style={{ marginLeft: 4 }}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
      </View>
      </>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start"
  }
});

export default MyCart;