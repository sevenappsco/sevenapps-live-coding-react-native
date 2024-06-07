import { Entypo } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Pressable, Text } from 'react-native';

import { Container } from '~/components/Container';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Home',
          headerRight: () => {
            return (
              <Pressable onPress={() => router.push('/new')}>
                <Entypo name="plus" size={24} color="black" />
              </Pressable>
            );
          },
        }}
      />
      <Container>
        <Text>Add your code here</Text>
      </Container>
    </>
  );
}
