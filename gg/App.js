import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { colors } from './constants';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Buttons from './src/components/Buttons';
import Balance from './src/components/Balance';
import QuickTransfer from './src/components/QuickTransfer';


export default function App() {
  return (
    <View style={{
      padding: 24,
      paddingTop: 55,
      paddingBottom: 220,
      backgroundColor: '#f7f5f0',
    }}>
      <View style={{height: '100%'}}>
        <Header />
        <Buttons />
        <Balance />
      </View>
      <QuickTransfer />
      <Footer />
    </View>
  );
}


