// Lib
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Hooks
import useChangePortfolio from '../hooks/useChangePortfolio';

const ChangePortfolio = () => {
  const { portfolioChange } = useChangePortfolio();

  return (
    <View>
      <Text>{portfolioChange}</Text>
      {/* <Text>{percentageСhange()}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChangePortfolio;
