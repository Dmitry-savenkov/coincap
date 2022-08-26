// Lib
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

// Components
import PortfolioListItem from './PortfolioListItem';

import { AppContext } from '../../store';

const PortfolioList = () => {
  const {
    state: {
      portfolio: { cryptocurrencies },
    },
  } = useContext(AppContext);

  return (
    <View style={[styles.payloadWrapper]}>
      {cryptocurrencies.map((item) => (
        <PortfolioListItem
          key={item.cryptocurrency}
          cryptocurrency={item.cryptocurrency}
          price={item.price}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  payloadWrapper: {
    paddingHorizontal: 15,
  },
});

export default PortfolioList;
