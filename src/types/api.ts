type CryptocurrencyItemTypes = {
  item: any;
  id: string;
  name: string;
  priceUsd: string;
  changePercent24Hr: string;
  marketCapUsd: string;
  maxSupply: string | null;
  supply: string;
  volumeUsd24Hr: string;
  vwap24Hr: string;
  cryptocurrency?: string;
  price?: string;
};

type SetCryptocurrenciesDataTypes = Array<CryptocurrencyItemTypes>;

type SetCryptocurrencies = {
  data: SetCryptocurrenciesDataTypes;
  loading: boolean;
};

export type { CryptocurrencyItemTypes, SetCryptocurrencies };
