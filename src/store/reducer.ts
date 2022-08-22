export const reducer = (state: any, action: { type: string }) => {
  switch (action.type) {
    case 'SET_CRYPTOCURRENCIES_DATA': {
      return {
        ...state,
        cryptoCurrencies: {
          ...state.cryptoCurrencies,
          data: [...state.cryptoCurrencies.data, ...action.payload.data],
        },
      };
    }
    case 'SET_CRYPTOCURRENCIES_LOADING': {
      return {
        ...state,
        cryptoCurrencies: {
          ...state.cryptoCurrencies,
          loading: true,
        },
      };
    }
    case 'SET_CRYPTOCURRENCIES_LOADED': {
      return {
        ...state,
        cryptoCurrencies: {
          ...state.cryptoCurrencies,
          loading: false,
        },
      };
    }
    case 'SET_CURRENT_CRYPTOCURRENCY_DATA': {
      return {
        ...state,
        currentCryptocurrency: {
          ...state.currentCryptocurrency,
          data: action.payload.data,
        },
      };
    }
    default:
      return state;
  }
};
