import { useContext, useCallback } from 'react';

import { AppContext } from '../store';

const useChangePortfolio = () => {
  const {
    state: {
      portfolio: { cryptocurrencies, lastPriceСhange },
    },
  } = useContext(AppContext);

  const cruptocurrencySum = useCallback((): number => {
    return cryptocurrencies.reduce((sum, cryptocurrency) => {
      return (sum += +cryptocurrency.price);
    }, 0);
  }, [cryptocurrencies]);

  // const percentageСhange = useCallback((): string => {
  //   const difference = cruptocurrencySum() - lastPriceСhange?.price;
  //   const differencePercentage = (difference * 100) / lastPriceСhange?.price;
  //   return differencePercentage.toString() + '%';
  // }, [cruptocurrencySum, lastPriceСhange]);

  const prefixValue = useCallback(
    () => (lastPriceСhange?.type === 'add' ? '+' : '-'),
    [lastPriceСhange?.type],
  );

  const cruptocurrencyPortfolioChange = useCallback((): string => {
    return cryptocurrencies.length === 0
      ? '0$'
      : lastPriceСhange?.type === 'remove'
      ? `${+cruptocurrencySum().toFixed(2)}` + `${prefixValue()}` + ` ${lastPriceСhange?.price}`
      : `${+(cruptocurrencySum() - lastPriceСhange?.price).toFixed(2)} USD ` +
        `${prefixValue()}` +
        ` ${lastPriceСhange?.price}`;
  }, [
    cruptocurrencySum,
    cryptocurrencies.length,
    lastPriceСhange?.price,
    lastPriceСhange?.type,
    prefixValue,
  ]);

  return {
    portfolioChange: cruptocurrencyPortfolioChange(),
  };
};

export default useChangePortfolio;
