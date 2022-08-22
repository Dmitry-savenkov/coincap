// Lib
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen
import AddCryptocurrency from '../screens/AddCryptocurrency';
import Cryptocurrencies from '../screens/Cryptocurrencies';
import Cryptocurrency from '../screens/Cryptocurrency';

const CryptocurrenciesStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Cryptocurrencies" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cryptocurrencies" component={Cryptocurrencies} />
      <Stack.Screen name="Cryptocurrency" component={Cryptocurrency} />
      <Stack.Screen name="AddCryptocurrency" component={AddCryptocurrency} />
    </Stack.Navigator>
  );
};

export default CryptocurrenciesStack;
