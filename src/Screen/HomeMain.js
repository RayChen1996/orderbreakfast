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
import Order from './Order';
import game from './BreakFastGame';
import Payment from './Payment';

const Stack = createStackNavigator();

const HomeMain = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Order}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{
            title: '早餐抽抽樂',
          }}
          name="game"
          component={game}
        />
      </Stack.Navigator>
    </View>
  );
};

export default HomeMain;
