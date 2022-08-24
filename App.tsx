import React from 'react';

import RootNavigationContainer from './src/navigation/NavigationContainer';

import ContextProvider from './src/store';

const App = () => {
  return (
    <ContextProvider>
      <RootNavigationContainer />
    </ContextProvider>
  );
};

export default App;
