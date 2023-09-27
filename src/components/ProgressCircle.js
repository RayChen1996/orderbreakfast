import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const ProgressCircle = ({ progress }) => {

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);




  return (
    <View style={styles.container}>
      <Svg width={2 * radius} height={2 * radius}>
        <Circle
          r={radius}
          cx={radius}
          cy={radius}
          fill="transparent"
          stroke="#007AFF" // 进度圆的颜色
          strokeWidth={10} // 圆的宽度
          strokeDasharray={`${circumference}, ${circumference}`}
          strokeDashoffset={strokeDashoffset}
        />
      </Svg>
      <Text style={styles.text}>等待中</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    color:'black',
    marginTop: 10,
    fontSize: 18,
  },
});

export default ProgressCircle;
