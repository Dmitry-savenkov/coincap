// Lib
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Hooks
import useChangePortfolio from '../hooks/useChangePortfolio';

const ChangePortfolio = () => {
  const { portfolioChangeUSD, percentageСhange } = useChangePortfolio();

  return (
    <View>
      <View>
        <Text>{portfolioChangeUSD}</Text>
        <Text>{percentageСhange}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChangePortfolio;
