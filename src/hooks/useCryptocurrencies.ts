import { useEffect, useContext, useCallback } from 'react';
import { fetchCryptoCyrrencies } from '../api';
import { AppContext } from '../store';

const useCryptocurrencies = (offset: any) => {
  const {
    dispatch,
    state: {
      cryptoCurrencies: { loading, data },
    },
  } = useContext(AppContext);

  const requestCurrencies = () => {
    dispatch({ type: 'SET_CRYPTOCURRENCIES_LOADING' });
    fetchCryptoCyrrencies(offset)
      .then((res) => {
        return res.json();
      })
      .then((dataJSON) => dispatch({ type: 'SET_CRYPTOCURRENCIES_DATA', payload: dataJSON }))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch({ type: 'SET_CRYPTOCURRENCIES_LOADED' });
      });
  };

  const requestCurrenciesCallback = useCallback(requestCurrencies, [dispatch, offset]);

  useEffect(() => {
    requestCurrenciesCallback();
  }, [offset, requestCurrenciesCallback]);

  return { loading, data };
};

export default useCryptocurrencies;
