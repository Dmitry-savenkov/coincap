// Lib
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

// Components
import PortfolioListItem from './PortfolioListItem';

// UI
import { colors } from '../constants';

import { AppContext } from '../store';

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
  portfolioItemContainer: {
    paddingHorizontal: 10,
    height: 60,
    backgroundColor: colors.grey,
    marginTop: 30,
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameCryptocurrency: {
    maxWidth: '50%',
    fontWeight: '600',
    fontSize: 16,
  },
  payloadWrapper: {
    paddingHorizontal: 15,
  },
});

export default PortfolioList;
