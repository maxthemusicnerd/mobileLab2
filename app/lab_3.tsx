import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IncrementButton from '../components/IncrementButton';
import DecrementButton from '../components/DecrementButton';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Awesome Points: {counter}</Text>
      <IncrementButton onPress={() => setCounter(counter + 1)} />
      <DecrementButton onPress={() => setCounter(counter - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ADD8E6' },
  text: { fontSize: 24 },
});

export default Counter;
