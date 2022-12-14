// Lib
import React, { useMemo } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Types
import { CryptocurrencyItemTypes } from '../../types/api';

// Components
import AntDesignIcon from '../Icons/AntDesignIcon';

// UI
import { width, colors } from '../../constants';

const CryptocurrenciesListItem = ({
  navigation,
  item,
}: {
  navigation: any;
  item: CryptocurrencyItemTypes;
}) => {
  return useMemo(
    () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Cryptocurrency', {
            id: item.id,
            name: item.name,
            changePercent24Hr: item.changePercent24Hr,
            priceUsd: item.priceUsd,
            marketCapUsd: item.marketCapUsd,
            maxSupply: item.maxSupply,
            supply: item.supply,
            volumeUsd24Hr: item.volumeUsd24Hr,
            vwap24Hr: item.vwap24Hr,
          })
        }
        style={[styles.container]}
      >
        <View style={[styles.contentWrapper]}>
          <View style={[styles.itemNameIdWrapper]}>
            <Text numberOfLines={1} style={[styles.cryptoName]}>
              {item.name}
            </Text>
            <Text style={[styles.cryptoId]}>{item.id}</Text>
          </View>
          <View style={[styles.cryptoPriceWrapper]}>
            <View style={[styles.priceUsdWrapper]}>
              <Text>{Number(item.priceUsd).toFixed(2)}$</Text>
              <View style={[styles.changePercent24HrWrapper]}>
                <Text style={{ color: +item.changePercent24Hr > 0 ? colors.green : colors.red }}>
                  {+item.changePercent24Hr > 0 ? '+' : null}
                  {Number(item.changePercent24Hr).toFixed(2)}%
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AddCryptocurrency', {
                  name: item.name,
                  priceUsd: item.priceUsd,
                })
              }
              style={[styles.navigateButton]}
            >
              <AntDesignIcon name="plus" size={16} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    ),
    [
      item.changePercent24Hr,
      item.id,
      item.marketCapUsd,
      item.maxSupply,
      item.name,
      item.priceUsd,
      item.supply,
      item.volumeUsd24Hr,
      item.vwap24Hr,
      navigation,
    ],
  );
};

const styles = StyleSheet.create({
  container: {
    height: 75,
    backgroundColor: colors.grey,
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
  itemNameIdWrapper: {
    paddingVertical: 20,
  },
  cryptoName: {
    fontSize: 14,
    fontWeight: '500',
    width: width * 0.4,
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
    backgroundColor: colors.green,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default CryptocurrenciesListItem;
