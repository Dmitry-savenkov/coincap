// Lib
import React, { useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

import { AppContext } from '../store';

//Components
import Loader from '../components/Loader';

const Cryptocurrencies = () => {
  const {
    state: {
      cryptoCurrencies: { loading, data },
    },
  } = useContext(AppContext);

  return (
    <SafeAreaView>
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => (
            <View>
              <Text>Currency</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Cryptocurrencies;
