import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import { Restaurant, OrderDelivery } from './screens'
import Tabs from './navigation/tabs'
import Login from './screens/Login';
import { homeRoutes } from './navigation/routeNames';
import { navigationRef } from './navigation/RootNav';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();


export const App = () => (
    <NavigationContainer ref={navigationRef}>

    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {homeRoutes.map((route) => (
        <HomeStack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
        />
      ))}
    </HomeStack.Navigator>
    </NavigationContainer>

  );


const App_back = () => {
    return (
        
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen name="Home" component={Login} />
                <Stack.Screen name="Tabs" component={Tabs} />
                <Stack.Screen name="Restaurant" component={Restaurant} />
                <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;