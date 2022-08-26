import { useContext, useCallback } from 'react';

import { AppContext } from '../store';

const useChangePortfolio = () => {
  const {
    state: {
      portfolio: { cryptocurrencies, lastPriceСhange },
    },
  } = useContext(AppContext);

  const cryptocurrencySum = useCallback((): number => {
    return cryptocurrencies.reduce((sum: number, cryptocurrency) => {
      return (sum += +cryptocurrency.price);
    }, 0);
  }, [cryptocurrencies]);

  const prefixValue = useCallback(
    () => (lastPriceСhange?.type === 'add' ? '+' : '-'),
    [lastPriceСhange?.type],
  );

  const percentageСhange = useCallback((): string | undefined => {
    if (lastPriceСhange?.type === 'add') {
      if (cryptocurrencySum() === +lastPriceСhange.price) {
        return '( +100%)';
      }
      const dif =
        ((cryptocurrencySum() - (cryptocurrencySum() - +lastPriceСhange.price)) * 100) /
        (cryptocurrencySum() - +lastPriceСhange.price);
      return `( +${dif.toFixed(2).toString()}%)`;
    }
    if (lastPriceСhange?.type === 'remove') {
      const dif =
        ((cryptocurrencySum() + +lastPriceСhange.price - cryptocurrencySum()) * 100) /
        (cryptocurrencySum() + +lastPriceСhange.price);

      return `( -${dif.toFixed(2).toString()}%)`;
    }
  }, [cryptocurrencySum, lastPriceСhange.price, lastPriceСhange?.type]);

  const cryptocurrencyPortfolioChange = useCallback((): string => {
    return cryptocurrencies.length === 0
      ? '0$'
      : lastPriceСhange?.type === 'remove'
      ? `${+cryptocurrencySum().toFixed(2)}$ ` + `${prefixValue()}` + ` ${lastPriceСhange?.price}$`
      : `${+(cryptocurrencySum() - +lastPriceСhange?.price).toFixed(2)} USD ` +
        `${prefixValue()}` +
        ` ${lastPriceСhange?.price}$`;
  }, [
    cryptocurrencySum,
    cryptocurrencies.length,
    lastPriceСhange?.price,
    lastPriceСhange?.type,
    prefixValue,
  ]);

  return {
    portfolioChangeUSD: cryptocurrencyPortfolioChange(),
    percentageСhange: percentageСhange(),
  };
};

export default useChangePortfolio;
