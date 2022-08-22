// Lib
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

// Hooks
import useCurrentCryptocurrency from '../hooks/useCurrentCryptocurrency';

// Components
import CryptocurrencyDetail from '../components/CryptocurrencyDetail';

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

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20 }}>
      <ScrollView>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>{name}</Text>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <CryptocurrencyDetail title="change percent 24 hr" value={changePercent24Hr} />
          <CryptocurrencyDetail title="price usd" value={priceUsd} />
          <CryptocurrencyDetail title="market capitalization usd" value={marketCapUsd} />
          <CryptocurrencyDetail title="max supply" value={maxSupply} />
          <CryptocurrencyDetail title="supply" value={supply} />
          <CryptocurrencyDetail title="volume usd 24 hr" value={volumeUsd24Hr} />
          <CryptocurrencyDetail title="v wap 24 hr" value={vwap24Hr} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Сryptocurrency;
