import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const breakFastGame = () => {
  const navigation = useNavigation();

  const handleConfirm = () => {
    // 导航到主页
    navigation.navigate('Home');
  };
  const [selectedBreakfast, setSelectedBreakfast] = useState(null);
  const breakfastOptions = ['麦片', '牛奶', '面包', '鸡蛋', '水果', '燕麦'];

  const handleSelectBreakfast = () => {
    const randomIndex = Math.floor(Math.random() * breakfastOptions.length);
    const selectedOption = breakfastOptions[randomIndex];
    setSelectedBreakfast(selectedOption);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>早餐抽抽乐</Text>
      <TouchableOpacity style={styles.button} onPress={handleSelectBreakfast}>
        <Text style={styles.buttonText}>抽卡</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  selectedBreakfast: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default breakFastGame;
