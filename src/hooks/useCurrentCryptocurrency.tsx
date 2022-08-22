import { useEffect, useContext, useCallback } from 'react';
import { API_URL } from '../api';
import { AppContext } from '../store';

const useCurrentCryptocurrency = (id: string) => {
  const { dispatch, state } = useContext(AppContext);

  const requestCurrencies = () => {
    fetch(`${API_URL}/${id}/history?interval=1h`)
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

  const requestCurrenciesCallback = useCallback(requestCurrencies, [dispatch, id]);

  useEffect(() => {
    requestCurrenciesCallback();
  }, [requestCurrenciesCallback]);

  return { loading, data };
};

export default useCurrentCryptocurrency;
