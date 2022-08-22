import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Сryptocurrency = ({
  navigation,
  route: {
    params: { id, name },
  },
}) => {
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Сryptocurrency;
