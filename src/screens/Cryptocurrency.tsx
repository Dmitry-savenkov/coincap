import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useCurrentCryptocurrency from '../hooks/useCurrentCryptocurrency';

const Сryptocurrency = ({
  navigation,
  route: {
    params: { id, name },
  },
}) => {
  const data = useCurrentCryptocurrency(id);

  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Сryptocurrency;
