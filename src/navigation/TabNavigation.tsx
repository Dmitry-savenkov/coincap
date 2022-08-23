// Lib
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screen
import Portfolio from '../screens/Portfolio';
import CryptocurrenciesStack from './CryptocurrenciesStack';

// Components
import AntDesignIcon from '../components/icons/AntDesignIcon';

// Types
import { TabNavigationParamList } from '../types/navigation';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator<TabNavigationParamList>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#FFFFFF' },
        tabBarInactiveTintColor: '#AAAAAA',
        tabBarActiveTintColor: '#000000',
      }}
      initialRouteName="Cryptocurrencies"
    >
      <Tab.Screen
        name="Cryptocurrencies"
        component={CryptocurrenciesStack}
        options={{
          tabBarIcon: ({ color }) => <AntDesignIcon name="barschart" size={20} color={color} />,
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ color }) => <AntDesignIcon name="wallet" size={20} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
