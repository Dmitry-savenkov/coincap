import { useEffect, useContext, useCallback } from 'react';
import { API_URL, fetchCryptoCyrrencyHistory } from '../api';
import { AppContext } from '../store';

const useCurrentCryptocurrency = (id: string) => {
  const {
    dispatch,
    state: {
      currentCryptocurrency: { data, loading },
    },
  } = useContext(AppContext);

  const requestCurrentCurrency = () => {
    dispatch({ type: 'SET_CURRENT_CRYPTOCURRENCY_LOADING' });
    fetchCryptoCyrrencyHistory(id)
      .then((res) => {
        return res.json();
      })
      .then((dataJSON) => dispatch({ type: 'SET_CURRENT_CRYPTOCURRENCY_DATA', payload: dataJSON }))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch({ type: 'SET_CURRENT_CRYPTOCURRENCY_LOADED' });
      });
  };

  const requestCurrenciesCallback = useCallback(requestCurrentCurrency, [dispatch, id]);

  useEffect(() => {
    requestCurrenciesCallback();
  }, [requestCurrenciesCallback]);

  const convertDataForChart = (data: any[]) =>
    data?.map((item) => {
      return {
        priceUsd: +item.priceUsd,
        time: new Date(item.date),
      };
    });

  return { loading, data: convertDataForChart(data) };
};

export default useCurrentCryptocurrency;
