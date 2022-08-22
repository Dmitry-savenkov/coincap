import React, { createContext, useReducer } from 'react';

import { reducer } from './reducer';

const initialState = {
  cryptoCurrencies: {
    data: [],
    loading: false,
  },
};

export const AppContext = createContext({
  state: initialState,
  dispatch: () => null,
});

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export default ContextProvider;