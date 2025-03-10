import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'expo-router';
import Fruits from '../components/fruits';

export default function App() {
  const [textColor, setTextColor] = useState<string>('red');

  function changeColor() {
    setTextColor((prevColor) => (prevColor === 'red' ? 'blue' : 'red'));
  }

function coolEvent() {
  alert(textColor)
}

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, color: textColor }}>Welcome Welcome!</Text>
      <Button title="eeby deeby" onPress={changeColor} />
      <Button title="crumb" onPress={coolEvent} />
      <StatusBar style="auto" />
      <Fruits></Fruits>
      <Link style={styles.link} href='/lab_3'>Lab 3</Link>
      <Link style={styles.link} href='/lab4'>Lab 4</Link>
      <Link style={styles.link} href='/lab5'>Lab 5</Link>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37F093',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  link: {
    fontSize: 30,
    
  },
});
