import React, { createContext, useReducer, Dispatch, ReactNode } from 'react';

import { reducer } from './reducer';
import { ActionTypes, StateTypes } from '../types/store';

type DispatchTypes = Dispatch<ActionTypes>;

type ContextTypes = {
  state: StateTypes;
  dispatch: DispatchTypes;
};

const initialState = {
  cryptoCurrencies: {
    data: [],
    loading: false,
  },
  currentCryptocurrency: {
    data: [],
    loading: false,
  },
  portfolio: {
    cryptocurrencies: [],
    lastPriceСhange: {
      price: null,
      type: null,
    },
  },
};

export const AppContext = createContext<ContextTypes>({
  state: initialState,
  dispatch: () => null,
});

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export default ContextProvider;
