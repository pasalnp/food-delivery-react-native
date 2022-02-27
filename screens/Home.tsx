import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import {
  icons, images, SIZES, COLORS, Headline1, Headline2, Headline3,
  Headline4, Body1, Body2,
  Body3, Body4, Body5, LargeTitle, GOOGLE_API_KEY
} from '../constants'
import Header from "./Components/Header";
import { navigate } from "../navigation/RootNav";
import { GetRequest } from "../Config/axios";
import { API, CDN } from "../Config/var";

const Home = ({ navigation }) => {
  const [data,setData] = useState([]);
  const [search,setSearch] = useState([]);
 useEffect(()=>{
   console.log('data>>>>>.loading');
   
   GetRequest("http://localhost:3000/post/sumir",{search})
.then((response) => {
	console.log('response');
	setData(response);
})
.catch(err => {
	console.error(err);
});

},[search])
  const initialCurrentLocation = {
    streetName: "Kuching",
    gps: {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922
    }
  }

  // const categoryData = [
    
  //   {
  //     id: 777,
  //     name: "Todays Menu",
  //     icon: icons.rice_bowl,
  //   }
  //   ,{
  //     id: 1,
  //     name: "Rice",
  //     icon: icons.rice_bowl,
  //   },
  //   {
  //     id: 2,
  //     name: "Noodles",
  //     icon: icons.noodle,
  //   },
  //   {
  //     id: 3,
  //     name: "Hot Dogs",
  //     icon: icons.hotdog,
  //   },
  //   {
  //     id: 4,
  //     name: "Salads",
  //     icon: icons.salad,
  //   },
  //   {
  //     id: 5,
  //     name: "Burgers",
  //     icon: icons.hamburger,
  //   },
  //   {
  //     id: 6,
  //     name: "Pizza",
  //     icon: icons.pizza,
  //   },
  //   {
  //     id: 7,
  //     name: "Snacks",
  //     icon: icons.fries,
  //   },
  //   {
  //     id: 8,
  //     name: "Sushi",
  //     icon: icons.sushi,
  //   },
  //   {
  //     id: 9,
  //     name: "Desserts",
  //     icon: icons.donut,
  //   },
  //   {
  //     id: 10,
  //     name: "Drinks",
  //     icon: icons.drink,
  //   },

  // ]

  // price rating
  const affordable = 1
  const fairPrice = 2
  const expensive = 3

  {/*const restaurantData = [
    {
      id: 1,
      name: "SUNDAY",
      rating: 4.8,
      categories: [5, 7],
      priceRating: affordable,
      photo: images.burger_restaurant_1,
      duration: "30 - 45 min",
      // location: {
      //   latitude: 1.5347282806345879,
      //   longitude: 110.35632207358996,
      // },
      // courier: {
      //   avatar: images.avatar_1,
      //   name: "Amy"
      // },
      menu: [
        {
          menuId: 1,
          name: "Crispy Chicken Burger",
          photo: images.crispy_chicken_burger,
          description: "Burger with crispy chicken, cheese and lettuce",
          calories: 200,
          price: 10
        },
        {
          menuId: 2,
          name: "Crispy Chicken Burger with Honey Mustard",
          photo: images.honey_mustard_chicken_burger,
          description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
          calories: 250,
          price: 15
        },
        {
          menuId: 3,
          name: "Crispy Baked French Fries",
          photo: images.baked_fries,
          description: "Crispy Baked French Fries",
          calories: 194,
          price: 8
        }
      ]
    },
    {
      id: 2,
      name: "Tuesday",
      rating: 4.8,
      categories: [2, 4, 777,6],
      priceRating: expensive,
      photo: images.pizza_restaurant,
      duration: "15 - 20 min",
      // location: {
      //   latitude: 1.556306570595712,
      //   longitude: 110.35504616746915,
      // },
      // courier: {
      //   avatar: images.avatar_2,
      //   name: "Jackson"
      // },
      menu: [
        {
          menuId: 4,
          name: "Hawaiian Pizza",
          photo: images.hawaiian_pizza,
          description: "Canadian bacon, homemade pizza crust, pizza sauce",
          calories: 250,
          price: 15
        },
        {
          menuId: 5,
          name: "Tomato & Basil Pizza",
          photo: images.pizza,
          description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
          calories: 250,
          price: 20
        },
        {
          menuId: 6,
          name: "Tomato Pasta",
          photo: images.tomato_pasta,
          description: "Pasta with fresh tomatoes",
          calories: 100,
          price: 10
        },
        {
          menuId: 7,
          name: "Mediterranean Chopped Salad ",
          photo: images.salad,
          description: "Finely chopped lettuce, tomatoes, cucumbers",
          calories: 100,
          price: 10
        }
      ]
    },
    {
      id: 3,
      name: "Monday",
      rating: 4.8,
      categories: [3],
      priceRating: expensive,
      photo: images.hot_dog_restaurant,
      duration: "20 - 25 min",
      // location: {
      //   latitude: 1.5238753474714375,
      //   longitude: 110.34261833833622,
      // },
      // courier: {
      //   avatar: images.avatar_3,
      //   name: "James"
      // },
      menu: [
        {
          menuId: 8,
          name: "Chicago Style Hot Dog",
          photo: images.chicago_hot_dog,
          description: "Fresh tomatoes, all beef hot dogs",
          calories: 100,
          price: 20
        }
      ]
    },
    {
      id: 4,
      name: "Tuesday",
      rating: 4.8,
      categories: [8],
      priceRating: expensive,
      photo: images.japanese_restaurant,
      duration: "10 - 15 min",
      // location: {
      //   latitude: 1.5578068150528928,
      //   longitude: 110.35482523764315,
      // },
      // courier: {
      //   avatar: images.avatar_4,
      //   name: "Ahmad"
      // },
      menu: [
        {
          menuId: 9,
          name: "Sushi sets",
          photo: images.sushi,
          description: "Fresh salmon, sushi rice, fresh juicy avocado",
          calories: 100,
          price: 50
        }
      ]
    },
    {
      id: 5,
      name: "Himalayan Cuisine",
      rating: 4.8,
      categories: [1, 2],
      priceRating: affordable,
      photo: images.noodle_shop,
      duration: "15 - 20 min",
      // location: {
      //   latitude: 1.558050496260768,
      //   longitude: 110.34743759630511,
      // },
      // courier: {
      //   avatar: images.avatar_4,
      //   name: "Muthu"
      // },
      menu: [
        {
          menuId: 10,
          name: "Kolo Mee",
          photo: images.kolo_mee,
          description: "Noodles with char siu",
          calories: 200,
          price: 5
        },
        {
          menuId: 11,
          name: "Sarawak Laksa",
          photo: images.sarawak_laksa,
          description: "Vermicelli noodles, cooked prawns",
          calories: 300,
          price: 8
        },
        {
          menuId: 12,
          name: "Nasi Lemak",
          photo: images.nasi_lemak,
          description: "A traditional Malay rice dish",
          calories: 300,
          price: 8
        },
        {
          menuId: 13,
          name: "Nasi Briyani with Mutton",
          photo: images.nasi_briyani_mutton,
          description: "A traditional Indian rice dish with mutton",
          calories: 300,
          price: 8
        },

      ]
    },
    {

      id: 6,
      name: "Himalayan Dessets",
      rating: 4.9,
      categories: [9, 10],
      priceRating: affordable,
      photo: images.kek_lapis_shop,
      duration: "35 - 40 min",
      // location: {
      //   latitude: 1.5573478487252896,
      //   longitude: 110.35568783282145,
      // },
      // courier: {
      //   avatar: images.avatar_1,
      //   name: "Jessie"
      // },
      menu: [
        {
          menuId: 12,
          name: "Teh C Peng",
          photo: images.teh_c_peng,
          description: "Three Layer Teh C Peng",
          calories: 100,
          price: 2
        },
        {
          menuId: 13,
          name: "ABC Ice Kacang",
          photo: images.ice_kacang,
          description: "Shaved Ice with red beans",
          calories: 100,
          price: 3
        },
        {
          menuId: 14,
          name: "Kek Lapis",
          photo: images.kek_lapis,
          description: "Layer cakes",
          calories: 300,
          price: 20
        }
      ]
    }

  ] */}

  const [categories, setCategories] = React.useState([])
  const [selectedCategory, setSelectedCategory] = React.useState(null)
  const [restaurantsback, setRestaurantsback] = React.useState([])
  const [days, setDays] = React.useState([])
  const [restaurants, setRestaurants] = React.useState([])
  const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)

useEffect(()=>{
  GetRequest(`${API}/get/categoryData`,).then(res=>{
    setCategories(res.data.content.data);
    console.log(res.data);
  })  
  GetRequest(`${API}/get/productData`,).then(res=>{
    setRestaurants(res.data.content.data);
    setRestaurantsback(res.data.content.data);
    console.log(res.data);
  })

 
},[])
useEffect(()=>{
  var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };
  
  console.log("grouped rdays",groupBy(restaurants, 'Avilday'));
  setData(groupBy(restaurants, 'Avilday'));
},[restaurants])
  function onSelectCategory(category) {
    //filter restaurant
    let restaurantList = restaurantsback.filter(a => a.category.includes(category.id))

    setRestaurants(restaurantList)

    setSelectedCategory(category)
  }

  function getCategoryNameById(id) {
    let category = categories.filter(a => a.id == id)

    if (category.length > 0)
      return category[0].name

    return ""
  }

  function renderHeader() {
    return (
      <>       
       {/* <Header title={'Home'} />  */}
      <View style={{padding:10, marginTop:50,flexDirection: 'row', height: 50,justifyContent:'space-between' }}>
      <Headline1>Home</Headline1>

        <TouchableOpacity onPress={()=>navigate('mycart')}
          style={{
            width: 50,
            alignItems:'flex-end',
            
          }}
        >
          <Image
            source={icons.basket}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30
            }}
          />
        </TouchableOpacity>
      </View>
      </>

    )
  }

  function renderMainCategories() {
    const renderItem = ({ item }) => {
      return (
        <View style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity
          style={{
            padding: 5,
           
            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
            borderRadius: SIZES.radius,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 5,
            ...styles.shadow
          }}
          onPress={() => onSelectCategory(item)}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
            }}
          >
            <Image
              source={{uri: `${CDN}/${item.icon}` }}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30
              }}
            />
          </View>

         
        </TouchableOpacity>
        <Text
            style={{
              fontSize: 12,
              padding: 10,
              color: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.black,
            }}
          >
            {item.name}
          </Text>
          
        </View>
        
      )
    }

    return (
      <View style={{ padding: SIZES.padding * 2 }}>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{ paddingVertical: SIZES.padding  }}
        />
      </View>
      
    )
  }

  
  function renderRestaurantList() {
    const renderItem = ({ item }) => (
      
      <TouchableOpacity
        style={{ marginBottom: SIZES.padding , borderColor:COLORS.primary, borderWidth:1, borderRadius:SIZES.radius }}
        onPress={() => navigation.navigate("restaurant", {
          restaurants,
          currentLocation:item.Avilday
        })}
      >
        
        {/* Image */}
        <View
          style={{
            marginBottom: SIZES.padding ,
            alignItems:'center',
            alignContent:'center'
          }}
        >
          <Image
            source={{uri: `${CDN}/assets/day/${item.Avilday}.png?123=13`}}
            resizeMode="cover"
            style={{
              margin:10,
              width: "94%",
              height: 200,
              borderRadius: SIZES.radius
            }}
          />

          {/* <View
            style={{
              position: 'absolute',
              bottom: 0,
              height: 50,
              width: SIZES.width * 0.3,
              backgroundColor: COLORS.white,
              borderTopRightRadius: SIZES.radius,
              borderBottomLeftRadius: SIZES.radius,
              alignItems: 'center',
              justifyContent: 'center',
              ...styles.shadow
            }}
          >
            <Headline4>{item.duration}</Headline4>
          </View> */}
        </View>

        {/* Restaurant Info */}
        <Headline3 style={{
           paddingLeft:30
          }}>
            Available on {item.Avilday}</Headline3>

        <View
          style={{
           
            flexDirection: 'row',
            paddingLeft:20,
            paddingBottom:10
          }}
        >
          {/* Rating */}
          {/* <Image
            source={icons.star}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.primary,
              marginRight: 10
            }}
          />
          <Body3>{item.rating}</Body3> */}

          {/* Categories */}
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10
            }}
          >
            {/* {
              item.categories.map((categoryId) => {
                return (
                  <View
                    style={{ flexDirection: 'row' }}
                    key={categoryId}
                  >
                    <Body3 style={{fontColor:'red'}}>{getCategoryNameById(categoryId)}</Body3>
                    <Headline3 >/</Headline3>
                  </View>
                )
              })
            } */}

            {/* Price */}
            {/* {
              [1, 2, 3].map((priceRating) => (
                <Body3
                  key={priceRating}
                  style={{
                    color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                  }}
                >$</Body3>
              ))
            } */}
          </View>
        </View>
      </TouchableOpacity>
    )

    return (
      <FlatList
        data={restaurants}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: 30
        }}
      />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMainCategories()}
      {renderRestaurantList()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  }
})


export default Home;
