// Lib
import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import AntDesignIcon from '../components/icons/AntDesignIcon';

import { AppContext } from '../store';

const Portfolio = () => {
  const {
    state: {
      portfolio: { cryptocurrencies },
    },
    dispatch,
  } = useContext(AppContext);

  return (
    <ScrollView style={[styles.container]}>
      <SafeAreaView>
        <View style={[styles.titleWrapper]}>
          <Text style={[styles.title]}>Portfolio</Text>
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
                <Text>{item.cryptocurrency}</Text>
                <View>
                  <Text>{item.price}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch({
                        type: 'DELETE_CRYPTOCURRENCY_FROM_PORTFOLIO',
                        payload: { cryptocurrency: item.cryptocurrency },
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
    marginTop: 20,
  },
});

export default Portfolio;
