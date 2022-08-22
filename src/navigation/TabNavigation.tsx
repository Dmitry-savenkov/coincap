// Lib
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screen
import Portfolio from '../screens/Portfolio';
import CryptocurrenciesStack from './CryptocurrenciesStack';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator initialRouteName="Cryptocurrencies">
      <Tab.Screen name="Cryptocurrencies" component={CryptocurrenciesStack} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
