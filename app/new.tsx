import { Stack } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

import { Container } from '~/components/Container';

const NewItem = () => {
  return (
    <Container>
      <Stack.Screen
        options={{ title: 'New Item', presentation: 'modal', animation: 'fade_from_bottom' }}
      />
      <Text>Add your code here</Text>
    </Container>
  );
};

export default NewItem;
