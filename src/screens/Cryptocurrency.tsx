// Lib
import React, { useCallback, useMemo } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';

// Components
import CryptocurrencyDetail from '../components/CryptocurrencyDetail';
import CryptocurrencyChart from '../components/CryptocurrencyChart';
import TouchableButton from '../components/TouchableButton';
import Title from '../components/Title';

// UI
import { colors } from '../constants';

// Types
import { CryptocurrencyNavigationProps } from '../types/navigation';

const Сryptocurrency = ({
  navigation,
  route: {
    params: {
      id,
      name,
      changePercent24Hr,
      priceUsd,
      marketCapUsd,
      maxSupply,
      supply,
      volumeUsd24Hr,
      vwap24Hr,
    },
  },
}: CryptocurrencyNavigationProps) => {
  const AddCryptocurrencyButtonPress = useCallback(
    () => navigation.navigate('AddCryptocurrency', { name, priceUsd }),
    [name, navigation, priceUsd],
  );

  return useMemo(
    () => (
      <SafeAreaView style={[styles.container]}>
        <ScrollView>
          <Title title={name} />
          <CryptocurrencyChart id={id} />
          <View style={[styles.cryptocurrencyDetailWrapper]}>
            <CryptocurrencyDetail
              title="value change in the last 24 hours"
              value={changePercent24Hr}
              percent={true}
            />
            <CryptocurrencyDetail title="volume-weighted price" value={priceUsd} percent={false} />
            <CryptocurrencyDetail title="supply x price" value={marketCapUsd} percent={false} />
            {maxSupply && (
              <CryptocurrencyDetail
                title="total quantity of asset"
                value={maxSupply}
                percent={false}
              />
            )}
            <CryptocurrencyDetail title="supply for trading" value={supply} percent={false} />
            <CryptocurrencyDetail
              title="quantity of trading volume"
              value={volumeUsd24Hr}
              percent={false}
            />
            <CryptocurrencyDetail
              title="Volume Weighted Average Price"
              value={vwap24Hr}
              percent={false}
            />
          </View>
          <TouchableButton
            text="Buy"
            onPress={AddCryptocurrencyButtonPress}
            stylesText={styles.buttonText}
            stylesWrapper={styles.button}
            disabled={false}
          />
        </ScrollView>
      </SafeAreaView>
    ),
    [
      AddCryptocurrencyButtonPress,
      changePercent24Hr,
      id,
      marketCapUsd,
      maxSupply,
      name,
      priceUsd,
      supply,
      volumeUsd24Hr,
      vwap24Hr,
    ],
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  cryptocurrencyDetailWrapper: {
    paddingHorizontal: 10,
  },
  button: {
    height: 45,
    backgroundColor: colors.green,
    marginTop: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Сryptocurrency;
