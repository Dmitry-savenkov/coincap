// Lib
import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Components
import AntDesignIcon from '../components/icons/AntDesignIcon';
import { colors } from '../constants';
import { AppContext } from '../store';

const PortfolioListItem = ({
  cryptocurrency,
  price,
}: {
  cryptocurrency: string;
  price: string;
}) => {
  const { dispatch } = useContext(AppContext);

  const deleteCyptocurrencyFromPortfolio = () => {
    dispatch({
      type: 'DELETE_CRYPTOCURRENCY_FROM_PORTFOLIO',
      payload: {
        cryptocurrency,
        price,
      },
    });
  };

  return (
    <View key={cryptocurrency} style={[styles.portfolioItemContainer]}>
      <Text numberOfLines={1} style={[styles.nameCryptocurrency]}>
        {cryptocurrency}
      </Text>
      <View style={[styles.priceAndButtonWrapper]}>
        <Text numberOfLines={1} style={[styles.price]}>
          ${(+price).toFixed(2)}
        </Text>
        <TouchableOpacity onPress={deleteCyptocurrencyFromPortfolio}>
          <AntDesignIcon name="delete" color={colors.black} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  portfolioItemContainer: {
    paddingHorizontal: 10,
    height: 60,
    backgroundColor: colors.grey,
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
  priceAndButtonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  price: {
    marginRight: 10,
  },
});

export default PortfolioListItem;
