import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import burger1 from '../../assets/burger1.jpg';
import cookie from '../../assets/egg1.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {color} from 'react-native-elements/dist/helpers';

const addMenuItem = newItem => {
  // 从JSON文件中读取数据

  const menuData = require('../../data/cart.json');

  // 生成一个新的唯一ID，你可以根据实际需求创建唯一ID
  const newId = menuData.length + 1;

  // 创建新的菜单项
  const newMenu = {
    id: newId,
    ...newItem,
  };

  // 将新菜单项添加到数据数组
  menuData.push(newMenu);

  // 将更新后的数据写回到JSON文件
  // fs.writeFileSync('../../data/cart.json', JSON.stringify(menuData, null, 2));
};
