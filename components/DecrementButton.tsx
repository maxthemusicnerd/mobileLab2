import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const DecrementButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Decrease</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { padding: 10, backgroundColor: 'red' },
  text: { color: 'white', fontSize: 16 },
});

export default DecrementButton;
