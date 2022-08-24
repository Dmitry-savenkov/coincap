// Lib
import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Components
import AntDesignIcon from '../components/icons/AntDesignIcon';
import { AppContext } from '../store';

const PortfolioList = () => {
  const {
    state: {
      portfolio: { cryptocurrencies },
    },
    dispatch,
  } = useContext(AppContext);

  return (
    <View style={[styles.payloadWrapper]}>
      {cryptocurrencies.map((item: { cryptocurrency: string; price: string }, i) => {
        return (
          <View key={i} style={[styles.portfolioItemContainer]}>
            <Text numberOfLines={1} style={[styles.nameCryptocurrency]}>
              {item.cryptocurrency}
            </Text>
            <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
              <Text numberOfLines={1} style={{ marginRight: 10 }}>
                ${+item.price}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch({
                    type: 'DELETE_CRYPTOCURRENCY_FROM_PORTFOLIO',
                    payload: {
                      cryptocurrency: item.cryptocurrency,
                      price: item.price,
                    },
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
  );
};

const styles = StyleSheet.create({
  portfolioItemContainer: {
    paddingHorizontal: 10,
    height: 60,
    backgroundColor: '#CECECE',
    marginTop: 30,
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameCryptocurrency: {
    maxWidth: '50%',
    fontWeight: '600',
    fontSize: 16,
  },
  payloadWrapper: {
    paddingHorizontal: 15,
  },
});

export default PortfolioList;
