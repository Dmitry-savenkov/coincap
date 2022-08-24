// Lib
import React from 'react';
import { StyleSheet, View, LogBox } from 'react-native';
import { VictoryChart, VictoryTheme, VictoryBar } from 'victory-native';

// Hooks
import useCurrentCryptocurrency from '../hooks/useCurrentCryptocurrency';

// Components
import Loader from './Loader';

LogBox.ignoreLogs(['Require cycle: node_modules/victory']);

const CryptocurrencyChart = ({ id }: { id: string }) => {
  const data = useCurrentCryptocurrency(id);

  return (
    <View style={styles.container}>
      {data.length !== 0 ? (
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="time" y="priceUsd" />
        </VictoryChart>
      ) : (
        <Loader />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CryptocurrencyChart;
