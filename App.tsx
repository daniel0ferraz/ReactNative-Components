import React from 'react';
import {StyleSheet, View} from 'react-native';
import Chart from './src/components/Chart/index';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Olá, mundo!</Text> */}
      <Chart />
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
