import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StepProgress = ({currentStep, steps}) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={styles.stepCircles}>
          {steps.map((step, index) => (
            <View
              key={index}
              style={[
                styles.stepCircle,
                {
                  backgroundColor: index < currentStep ? 'orange' : '#D3D3D3',
                  borderColor: index === currentStep - 1 ? 'orange' : '#D3D3D3',
                },
              ]}>
              <Text style={styles.stepText}>
                {index + 1 === currentStep ? step : null}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <Text style={styles.statusText}>{steps[currentStep - 1]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  stepCircles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  stepCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepText: {
    color: 'white',
    fontWeight: 'bold',
  },
  statusText: {
    color: 'black',
  },
});

export default StepProgress;
