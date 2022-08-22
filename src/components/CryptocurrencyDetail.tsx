import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CryptocurrencyDetail = ({ title, value }) => {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>{title}</Text>
      <Text>{Number(value).toFixed(2)}$</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 35,
    backgroundColor: '#CECECE',
    flexDirection: 'row',
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
  },
});

export default CryptocurrencyDetail;
