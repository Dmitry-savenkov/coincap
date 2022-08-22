export const reducer = (state: any, action: { type: string }) => {
  switch (action.type) {
    case 'SET_CRYPTOCURRENCIES_DATA': {
      return {
        ...state,
        cryptoCurrencies: {
          data: [...state.cryptoCurrencies.data, ...action.payload.data],
        },
      };
    }
    default:
      return state;
  }
};
