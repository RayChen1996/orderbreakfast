import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OrderPage from './Order';
import Profile from './Profile';
import ShoppingCart from './ShoppingCart';
import Login from './Login';
import OrderManage from './MyOrderProgress';
import Checkout from './Checkout';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const Home = () => {
  return (
    <NavigationContainer>
      {/**
      <Stack.Navigator>

        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
      */}

      <Tab.Navigator
        screenOptions={({route}) => ({})}
        // Hide labels to fit more tabs
        activeColor="orange" // 在这里设置选中选项卡的颜色
        inactiveColor="#000"
        barStyle={{backgroundColor: 'white'}}>
        <Tab.Screen
          name="首頁"
          component={OrderPage}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="購物車" component={Profile} />
        <Tab.Screen name="訂單追蹤" component={OrderManage} />
        <Tab.Screen name="設定" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  headers: {},
});

export default Home;
