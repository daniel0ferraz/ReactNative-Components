/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

export default function Chart() {
  const [data, setData] = useState('');

  return (
    <View>
      <Text>Gráfico evolutivo</Text>
      <LineChart
        data={{
          labels: ['January', 'February'],
          datasets: [
            {
              data: [0, 100000, 5, 16],
            },
          ],
        }}
        // width={Dimensions.get('window').width} // from react-native
        width={390}
        height={400}
        yAxisLabel="$"
        // yAxisSuffix="k"
        yAxisInterval={0.9} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#000000',
          backgroundGradientFrom: '#9e9b98',
          backgroundGradientTo: '#9e9b98',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

          style: {
            borderRadius: 5,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        // bezier
        style={{
          marginVertical: 5,
          borderRadius: 8,
        }}
      />
    </View>
  );
}
