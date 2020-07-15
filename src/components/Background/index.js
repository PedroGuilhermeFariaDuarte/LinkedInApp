import React from 'react';
import { View, SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default ({ children }) => (
  <SafeAreaView style={{ height: "100%" }}>
    <LinearGradient colors={['#f5f5f5', '#FFFF']} style={{ flex: 1 }}>
      {children}
    </LinearGradient>
  </SafeAreaView>
);
