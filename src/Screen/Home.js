import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeMain from './HomeMain';
import Profile from './Profile';
import ShoppingCart from './ShoppingCart';
import Login from './Login';
import OrderManage from './MyOrderProgress';
import Checkout from './Checkout';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import Icon from 'react-native-vector-icons/FontAwesome';
const Home = () => {
  return (
    <NavigationContainer>
      {/**
      <Stack.Navigator>

        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
      */}

      <Tab.Navigator>
        <Tab.Screen
          name="首頁"
          component={HomeMain}
          options={{
            tabBarLabel: '首頁',
            headerShown: false,
            tabBarActiveTintColor: 'orange',
            tabBarIcon: ({color, size}) => (
              <Icon name="home" size={size} color={'orange'} />
            ),
          }}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarActiveTintColor: 'orange',
            tabBarIcon: ({color, size}) => (
              <Icon name="shopping-cart" size={size} color={'orange'} />
            ),
          }}
          name="購物車"
          component={Profile}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarActiveTintColor: 'orange',
            tabBarLabel: '訂單追蹤',
            tabBarIcon: ({color, size}) => (
              <Icon name="truck" size={size} color={'orange'} />
            ),
          }}
          name="訂單追蹤"
          component={OrderManage}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '設定',
            tabBarActiveTintColor: 'orange',
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="cog" size={size} color={'orange'} />
            ),
          }}
          name="設定"
          component={Login}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  headers: {},
});

export default Home;
