// Lib
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

//Components
import Loader from '../components/Loader';

// Hooks
import useCryptocurrenciesRequest from '../hooks/useCryptocurrenciesRequest';

const Cryptocurrencies = ({ navigation }) => {
  const [offset, setOffset] = useState(0);

  const { loading, data } = useCryptocurrenciesRequest(offset);

  const loadMore = () => {
    if (!loading) {
      setOffset((offset) => offset + 10);
    }
  };

  return (
    <SafeAreaView>
      {data.length ? (
        <View style={{ paddingHorizontal: 10 }}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => item.id + index.toString()}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Cryptocurrency')}
                style={{
                  height: 75,
                  backgroundColor: '#C7C7C7',
                  marginTop: 20,
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    paddingLeft: 10,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <View style={{ paddingVertical: 20 }}>
                    <Text style={{ fontSize: 14, fontWeight: '500' }}>{item.name}</Text>
                    <Text style={{ fontSize: 10, fontWeight: '400' }}>{item.id}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', height: '100%' }}>
                    <View style={{ paddingVertical: 20, marginRight: 20, alignItems: 'center' }}>
                      <Text>{Number(item.priceUsd).toFixed(2)}$</Text>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'row',
                        }}
                      >
                        <Text
                          style={{
                            color: item.changePercent24Hr > 0 ? 'green' : 'red',
                          }}
                        >
                          {item.changePercent24Hr > 0 ? '+' : null}
                          {Number(item.changePercent24Hr).toFixed(2)}%
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('AddCryptocurrency')}
                      style={{
                        paddingHorizontal: 30,
                        backgroundColor: '#3BAC3F',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                      }}
                    >
                      <Text style={{ color: 'white' }}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      ) : (
        <Loader />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Cryptocurrencies;
