// Lib
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Components
import AntDesignIcon from './icons/AntDesignIcon';

const CryptocurrenciesList = ({ navigation, item }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cryptocurrency', { id: item.id })}
      style={[styles.container]}
    >
      <View style={[styles.contentWrapper]}>
        <View style={{ paddingVertical: 20 }}>
          <Text style={[styles.cryptoName]}>{item.name}</Text>
          <Text style={[styles.cryptoId]}>{item.id}</Text>
        </View>
        <View style={[styles.cryptoPriceWrapper]}>
          <View style={[styles.priceUsdWrapper]}>
            <Text>{Number(item.priceUsd).toFixed(2)}$</Text>
            <View style={[styles.changePercent24HrWrapper]}>
              <Text style={{ color: item.changePercent24Hr > 0 ? '#3AA43E' : 'red' }}>
                {item.changePercent24Hr > 0 ? '+' : null}
                {Number(item.changePercent24Hr).toFixed(2)}%
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddCryptocurrency')}
            style={[styles.navigateButton]}
          >
            <AntDesignIcon name="plus" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 75,
    backgroundColor: '#CECECE',
    marginTop: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  contentWrapper: {
    paddingLeft: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cryptoName: {
    fontSize: 14,
    fontWeight: '500',
  },
  cryptoId: {
    fontSize: 10,
    fontWeight: '400',
  },
  cryptoPriceWrapper: {
    flexDirection: 'row',
    height: '100%',
  },
  priceUsdWrapper: {
    paddingVertical: 20,
    marginRight: 20,
    alignItems: 'center',
  },
  changePercent24HrWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  navigateButton: {
    paddingHorizontal: 30,
    backgroundColor: '#3AA43E',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default CryptocurrenciesList;
