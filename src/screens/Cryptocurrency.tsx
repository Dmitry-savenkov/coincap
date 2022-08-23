// Lib
import React, { useCallback, useMemo } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

// Hooks
import useCurrentCryptocurrency from '../hooks/useCurrentCryptocurrency';

// Components
import CryptocurrencyDetail from '../components/CryptocurrencyDetail';
import TouchableButton from '../components/TouchableButton';

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
}) => {
  const data = useCurrentCryptocurrency(id);

  const AddCryptocurrencyButtonPress = useCallback(() => {
    navigation.navigate('AddCryptocurrency', { name, priceUsd });
  }, [name, navigation, priceUsd]);

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView>
        <View style={[styles.titleWrapper]}>
          <Text style={[styles.title]}>{name}</Text>
        </View>
        <View style={[styles.cryptocurrencyDetailWrapper]}>
          <CryptocurrencyDetail title="change percent 24 hr" value={changePercent24Hr} />
          <CryptocurrencyDetail title="price usd" value={priceUsd} />
          <CryptocurrencyDetail title="market capitalization usd" value={marketCapUsd} />
          <CryptocurrencyDetail title="max supply" value={maxSupply} />
          <CryptocurrencyDetail title="supply" value={supply} />
          <CryptocurrencyDetail title="volume usd 24 hr" value={volumeUsd24Hr} />
          <CryptocurrencyDetail title="v wap 24 hr" value={vwap24Hr} />
        </View>
        <TouchableButton
          text="Buy"
          onPress={AddCryptocurrencyButtonPress}
          stylesText={styles.buttonText}
          stylesWrapper={styles.button}
        />
      </ScrollView>
    </SafeAreaView>
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
    backgroundColor: '#3AA43E',
    marginTop: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Сryptocurrency;
