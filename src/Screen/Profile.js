import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Modal,
  StyleSheet,
  Image,
  RefreshControl,
  TouchableOpacity,
  ToastAndroid,
  TextInput,
  Alert,
  ActivityIndicator,
  ProgressBarAndroid,
} from 'react-native';
import _Header from '../components/_header';
import Category from '../components/Category';
import BreakfastCategory from '../components/BreakfastCategory';
// import renderItem  from '../components/ListView/foodItem'
import menuData from '../../src/data/cart.json';
import ProgressCircle from '../components/ProgressCircle';
import * as Progress from 'react-native-progress';
import CustomLoader from '../components/CustomLoader';
import axios from 'axios';
import burger1 from '../assets/burger1.jpg';
import cookie from '../assets/egg1.jpg';
import BottomSheetDialog from '../components/Modal/_AddShopCartModal';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import shoppingCart from './ShoppingCart';
import Checkout from './Checkout';
import Payment from './Payment';
const Stack = createStackNavigator();

const Profile = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            Text: '123',
          }}
          name="shoppingCart"
          component={shoppingCart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{
            title: '確認訂單',
          }}
          name="checkout"
          component={Checkout}
        />
        <Stack.Screen
          options={{
            title: '選擇付款方式',
          }}
          name="payment"
          component={Payment}
        />
      </Stack.Navigator>
    </View>
  );
};

export default Profile;
