// Lib
import React, { useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { AppContext } from '../store';

//Components
import Loader from '../components/Loader';

const Cryptocurrencies = () => {
  const {
    state: {
      cryptoCurrencies: { loading },
    },
  } = useContext(AppContext);

  return (
    <SafeAreaView>
      <Text>Cryptocurrencies</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Cryptocurrencies;
