import React from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

const CustomLoader = ({ visible, progress, onClose }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.overlay}></View>
        <View style={styles.loader}>
          <ProgressBar
            progress={progress}
            width={200}
            height={10}
            color="#3498db"
          />
          <Text style={styles.progressText}>{`${Math.round(
            progress * 100
          )}%`}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明黑色背景
  },
  loader: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  progressText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default CustomLoader;
