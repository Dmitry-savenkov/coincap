// Lib
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

//Components
import Loader from '../components/Loader';

// Hooks
import useCryptocurrenciesRequest from '../hooks/useCryptocurrenciesRequest';

import { AppContext } from '../store';

const Cryptocurrencies = () => {
  const [offset, setOffset] = useState(0);

  const { loading, data } = useCryptocurrenciesRequest(offset);

  const loadMore = () => {
    if (!loading) {
      setOffset((offset) => offset + 10);
    }
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
            <View
              style={{
                height: 75,
                backgroundColor: '#C7C7C7',
                marginTop: 20,
                borderRadius: 10,
              }}
            >
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
