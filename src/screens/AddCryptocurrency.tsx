import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AddCryptocurrency = ({
  route: {
    params: { name, priceUsd },
  },
}) => {
  return (
    <View>
      <Text>
        {name} {priceUsd}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddCryptocurrency;
