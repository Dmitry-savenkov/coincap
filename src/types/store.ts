import { SetCryptocurrencies, CryptocurrencyItemTypes } from './api';

type ActionTypes =
  | { type: 'SET_CRYPTOCURRENCIES_DATA'; payload: SetCryptocurrencies }
  | { type: 'SET_CRYPTOCURRENCIES_LOADING' }
  | { type: 'SET_CRYPTOCURRENCIES_LOADED' }
  | { type: 'SET_CURRENT_CRYPTOCURRENCY_LOADING' }
  | { type: 'SET_CURRENT_CRYPTOCURRENCY_LOADED' }
  | { type: 'SET_CURRENT_CRYPTOCURRENCY_DATA'; payload: SetCryptocurrencies }
  | { type: 'ADD_CRYPTOCURRENCY_IN_PORTFOLIO'; payload: PortfolioCryptocurrenciesItemTypes | any }
  | { type: 'DELETE_CRYPTOCURRENCY_FROM_PORTFOLIO'; payload: PortfolioCryptocurrenciesItemTypes };

type PortfolioCryptocurrenciesItemTypes = {
  cryptocurrency: string;
  price: string;
};

type PortfolioLastPriceСhangeItemTypes = {
  price: string | null | any;
  type: string | null | any;
};

type CurrentCryptocurrencyItemTypes = {
  circulatingSupply?: string;
  date?: string;
  priceUsd: string;
  time: number;
};

type CurrentCryptocurrencyTypes = Array<CurrentCryptocurrencyItemTypes>;

type CryptocurrenciesDataTypes = Array<CryptocurrencyItemTypes>;

type PortfolioCryptocurrenciesTypes = Array<PortfolioCryptocurrenciesItemTypes>;

type StateTypes = {
  cryptoCurrencies: {
    data: CryptocurrenciesDataTypes;
    loading: boolean;
  };
  currentCryptocurrency: {
    data: CurrentCryptocurrencyTypes | any[];
    loading: boolean;
  };
  portfolio: {
    cryptocurrencies: PortfolioCryptocurrenciesTypes;
    lastPriceСhange: PortfolioLastPriceСhangeItemTypes;
  };
};

export type { ActionTypes, StateTypes };
