import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>yoyo</Text>
      <StatusBar style="auto" />
      <View style={upblock.container}>
        <Text>img</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f5f0',
  },
  Text: {
    color: 'black',
    fontSize: 20,
  },
});
const upblock = StyleSheet.create({
  container: {
    height: 80,
  },
  Image: {
    height: 200,
    width: 200,
  },
});
