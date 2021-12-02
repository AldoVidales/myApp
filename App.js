import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/components/LoginForms';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hola DEVICE</Text>
      <Text>SEGUNDA LINEA</Text>
      <LoginForm></LoginForm>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
