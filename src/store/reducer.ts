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
    case 'SET_CRYPTOCURRENCY_IN_PORTFOLIO': {
      const index = state.portfolio.cryptocurrencies.findIndex((item) => {
        return item.cryptocurrency === action.payload.cryptocurrency;
      });
      return index === -1
        ? {
            ...state,
            portfolio: {
              ...state.portfolio,
              cryptocurrencies: [...state.portfolio.cryptocurrencies, { ...action.payload }],
              lastPriceСhange: { price: action.payload.price, type: 'add' },
            },
          }
        : {
            ...state,
            portfolio: {
              ...state.portfolio,
              cryptocurrencies: [
                ...state.portfolio.cryptocurrencies.map((item, i) => {
                  return i === index
                    ? { ...item, price: Number(item.price) + Number(action.payload.price) }
                    : item;
                }),
              ],
              lastPriceСhange: { price: action.payload.price, type: 'add' },
            },
          };
    }
    case 'DELETE_CRYPTOCURRENCY_FROM_PORTFOLIO': {
      return {
        ...state,
        portfolio: {
          ...state.portfolio,
          cryptocurrencies: [
            ...state.portfolio.cryptocurrencies.filter((item, i) => {
              return item.cryptocurrency !== action.payload.cryptocurrency;
            }),
          ],
          lastPriceСhange: { price: action.payload.price, type: 'remove' },
        },
      };
    }
    default:
      return state;
  }
};
