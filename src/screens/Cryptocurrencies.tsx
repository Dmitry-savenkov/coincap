// Lib
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

import { AppContext } from '../store';

//Components
import Loader from '../components/Loader';

import useCryptocurrenciesRequest from '../hooks/useCryptocurrenciesRequest';

const Cryptocurrencies = () => {
  const [offset, setOffset] = useState(0);
  console.log('here');

  const { loading, data } = useCryptocurrenciesRequest(offset);

  const loadMore = () => {
    setOffset((offset) => offset + 10);
  };

  return (
    <SafeAreaView>
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
          renderItem={({ item, index }) => (
            <View>
              <Text>{item.id}</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Cryptocurrencies;
