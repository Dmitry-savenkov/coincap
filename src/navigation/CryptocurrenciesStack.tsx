// Lib
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen
import AddCryptocurrency from '../screens/AddCryptocurrency';
import Cryptocurrencies from '../screens/Cryptocurrencies';
import Cryptocurrency from '../screens/Cryptocurrency';

// Types
import { CryptocurrenciesStackParams } from '../types/navigation';

const CryptocurrenciesStack = () => {
  const Stack = createNativeStackNavigator<CryptocurrenciesStackParams>();

  return (
    <Stack.Navigator
      initialRouteName="CryptocurrenciesScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="CryptocurrenciesScreen" component={Cryptocurrencies} />
      <Stack.Screen name="Cryptocurrency" component={Cryptocurrency} />
      <Stack.Screen name="AddCryptocurrency" component={AddCryptocurrency} />
    </Stack.Navigator>
  );
};

export default CryptocurrenciesStack;
