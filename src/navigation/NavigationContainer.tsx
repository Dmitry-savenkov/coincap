import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigation from './TabNavigation';

const RootNavigationContainer = () => (
  <NavigationContainer>
    <TabNavigation />
  </NavigationContainer>
);

export default RootNavigationContainer;
