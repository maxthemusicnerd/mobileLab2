import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const IncrementButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Increase</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { padding: 10, backgroundColor: 'blue', marginBottom: 10 },
  text: { color: 'white', fontSize: 16 },
});

export default IncrementButton;
