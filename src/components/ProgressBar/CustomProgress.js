import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class CustomProgress extends Component {
  render() {
    const {stages, currentStage} = this.props;
    const progressWidth = `${(currentStage / stages.length) * 100}%`;

    return (
      <View style={styles.container}>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, {width: progressWidth}]}></View>
        </View>
        <View style={styles.stageContainer}>
          {stages.map((stage, index) => (
            <View
              key={index}
              style={[
                styles.stage,
                {
                  backgroundColor: index < currentStage ? '#007AFF' : '#D3D3D3',
                },
              ]}></View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  progressContainer: {
    width: '100%',
    height: 10,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    marginBottom: 10,
  },
  progressBar: {
    height: '100%',
    borderRadius: 5,
    backgroundColor: '#007AFF',
  },
  stageContainer: {
    flexDirection: 'row',
  },
  stage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
});

export default CustomProgress;
