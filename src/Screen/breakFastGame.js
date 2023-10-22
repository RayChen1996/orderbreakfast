import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SwipeGestures from 'react-native-swipe-gestures'; // 引入 react-native-swipe-gestures
import img1 from '../assets/egg1.jpg';
const BreakfastGame = ({navigation}) => {
  const [selectedBreakfast, setSelectedBreakfast] = useState(null);
  const breakfastOptions = ['麦片', '牛奶', '面包', '鸡蛋', '水果', '燕麦'];

  const handleSwipe = gestureName => {
    if (gestureName === 'SWIPE_LEFT' || gestureName === 'SWIPE_RIGHT') {
      const randomIndex = Math.floor(Math.random() * breakfastOptions.length);
      const selectedOption = breakfastOptions[randomIndex];
      setSelectedBreakfast(selectedOption);
    }
  };

  return (
    <SwipeGestures
      onSwipe={direction => handleSwipe(direction)}
      config={{
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80,
      }}
      style={styles.container}>
      <View style={styles.card}>
        <Image
          style={{
            width: 390,
            height: 390,
            resizeMode: 'cover',
            borderRadius: 15,
            margin: 5,
          }}
          source={img1}
        />
        <Text style={styles.cardText}>
          {selectedBreakfast ? selectedBreakfast : '請滑動選擇早餐'}
        </Text>
      </View>

      <View
        style={{
          flex: 0.1,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSwipe('SWIPE_LEFT')}>
          <Text style={styles.buttonText}>向左滑</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSwipe('SWIPE_RIGHT')}>
          <Text style={styles.buttonText}>向右滑</Text>
        </TouchableOpacity>
      </View>
    </SwipeGestures>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 0.8,

    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  cardText: {
    fontSize: 24,
    color: 'white',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default BreakfastGame;
