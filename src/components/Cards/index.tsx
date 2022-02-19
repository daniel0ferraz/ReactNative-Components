import * as React from 'react';

type PropsCards = {
  name: string;
  description: string;
  color: 'white' | 'black';
};

export default function Card({name, description, color}: PropsCards) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{description}</Text>
      <Text>{color}</Text>
    </View>
  );
}
