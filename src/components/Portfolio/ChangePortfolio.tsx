// Lib
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Hooks
import useChangePortfolio from '../../hooks/useChangePortfolio';

const ChangePortfolio = () => {
  const { portfolioChangeUSD, percentageСhange } = useChangePortfolio();

  return (
    <View style={[styles.container]}>
      <Text>{portfolioChangeUSD}</Text>
      <Text>{percentageСhange}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
});

export default ChangePortfolio;
