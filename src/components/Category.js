import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const Category = () => {
  const [selectedButton, setSelectedButton] = useState('daily'); // 初始选中每日精选按钮

  const handleButtonPress = buttonType => {
    setSelectedButton(buttonType);
  };

  return (
    <View style={{flex: 0.5, flexDirection: 'row'}}>
      <View style={{flex: 0.1}}></View>

      <TouchableOpacity
        style={{
          flex: 0.35,
          borderRadius: 5,
          backgroundColor: selectedButton === 'daily' ? 'orange' : 'white',
          borderWidth: 1,
          borderColor: selectedButton === 'all' ? 'orange' : '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => handleButtonPress('daily')}>
        <Text
          style={{
            color: selectedButton === 'all' ? 'orange' : '#fff',
            textAlign: 'center',
          }}>
          每日精選
        </Text>
      </TouchableOpacity>

      <View style={{flex: 0.05}}></View>

      <TouchableOpacity
        style={{
          flex: 0.35,
          borderRadius: 5,
          backgroundColor: selectedButton === 'all' ? 'orange' : 'white',
          borderColor: selectedButton === 'all' ? 'white' : 'orange',
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => handleButtonPress('all')}>
        <Text
          style={{
            color: selectedButton === 'all' ? 'white' : 'orange',
            textAlign: 'center',
          }}>
          全部菜單
        </Text>
      </TouchableOpacity>

      <View style={{flex: 0.1}}></View>
    </View>
  );
};

export default Category;
