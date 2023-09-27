import React from 'react';
import {View,Text, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import OrderPage from './Order'
import ShoppingCart from './ShoppingCart';
import Login from './Login';
import OrderManage from './MyOrderProgress'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();


const Home = () => {
  return (
    <NavigationContainer>

        <Tab.Navigator 
            screenOptions={({ route }) => ({
       
            })}
            
            activeColor='orange' // 在这里设置选中选项卡的颜色
   

            barStyle={{ backgroundColor: 'white' }}
        >
        <Tab.Screen name="首頁" component={OrderPage}  />
        <Tab.Screen name="購物車" component={ShoppingCart}  />
        <Tab.Screen name="訂單追蹤" component={OrderManage} />
        <Tab.Screen name="設定" component={Login} />

        </Tab.Navigator>
    </NavigationContainer>
  )
}



const style = StyleSheet.create({
    headers:{

    },

})

export default Home