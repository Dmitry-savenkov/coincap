import { useEffect, useContext, useCallback } from 'react';
import { API_URL, fetchAllCyrrencies } from '../api';
import { AppContext } from '../store';

const useCryptocurrenciesRequest = (offset: number) => {
  const {
    dispatch,
    state: {
      cryptoCurrencies: { loading, data },
    },
  } = useContext(AppContext);

  const requestCurrencies = () => {
    dispatch({ type: 'SET_CRYPTOCURRENCIES_LOADING' });
    fetch(`${API_URL}?offset=${offset}&limit=10`)
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

export default useCryptocurrenciesRequest;
