// Lib
import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import AntDesignIcon from '../components/icons/AntDesignIcon';
import ChangePortfolio from '../components/ChangePortfolio';

import { AppContext } from '../store';

const Portfolio = () => {
  const {
    state: {
      portfolio: { cryptocurrencies },
    },
    dispatch,
  } = useContext(AppContext);

  return (
    <ScrollView style={[styles.container]} showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <View style={[styles.titleWrapper]}>
          <Text style={[styles.title]}>Portfolio</Text>
        </View>
        <View>
          <ChangePortfolio />
        </View>
        <View style={[styles.payloadWrapper]}>
          {cryptocurrencies.map((item, i) => {
            return (
              <View
                key={i}
                style={{
                  paddingHorizontal: 10,
                  height: 60,
                  backgroundColor: '#CECECE',
                  marginTop: 30,
                  borderRadius: 10,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{ maxWidth: '50%', fontWeight: '600', fontSize: 16 }}
                >
                  {item.cryptocurrency}
                </Text>
                <View
                  style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}
                >
                  <Text numberOfLines={1} style={{ marginRight: 10 }}>
                    ${item.price}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch({
                        type: 'DELETE_CRYPTOCURRENCY_FROM_PORTFOLIO',
                        payload: { cryptocurrency: item.cryptocurrency, price: item.price },
                      });
                    }}
                  >
                    <AntDesignIcon name="delete" color="black" size={20} />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  payloadWrapper: {
    paddingHorizontal: 15,
  },
});

export default Portfolio;
