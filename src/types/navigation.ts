import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CryptocurrencyItemTypes } from './api';

export type TabNavigationParamList = {
  Cryptocurrencies: undefined;
  Portfolio: undefined;
};

export type CryptocurrenciesStackParams = {
  CryptocurrenciesScreen: undefined;
  Cryptocurrency: CryptocurrencyItemTypes;
  AddCryptocurrency: {
    name: string;
    priceUsd: string;
  };
};

export type CryptocurrensiesNavigationProps = NativeStackScreenProps<
  CryptocurrenciesStackParams,
  'CryptocurrenciesScreen'
>;
export type CryptocurrencyNavigationProps = NativeStackScreenProps<
  CryptocurrenciesStackParams,
  'Cryptocurrency'
>;

export type AddCryptocurrencyNavigationProps = NativeStackScreenProps<
  CryptocurrenciesStackParams,
  'AddCryptocurrency'
>;
