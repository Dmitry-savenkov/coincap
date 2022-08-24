import { useEffect, useContext, useCallback } from 'react';
import { API_URL } from '../api';
import { AppContext } from '../store';

const useCurrentCryptocurrency = (id: string) => {
  const {
    dispatch,
    state: {
      currentCryptocurrency: { data },
    },
  } = useContext(AppContext);

  const requestCurrentCurrency = () => {
    fetch(`${API_URL}/${id}/history?interval=h12`)
      .then((res) => {
        return res.json();
      })
      .then((dataJSON) => dispatch({ type: 'SET_CURRENT_CRYPTOCURRENCY_DATA', payload: dataJSON }))
      .catch((error) => {
        console.log(error);
      });
  };

  const requestCurrenciesCallback = useCallback(requestCurrentCurrency, [dispatch, id]);

  useEffect(() => {
    requestCurrenciesCallback();
  }, [requestCurrenciesCallback]);

  return data.map((item) => {
    return {
      priceUsd: +item.priceUsd,
      time: new Date(item.date),
    };
  });
};

export default useCurrentCryptocurrency;
