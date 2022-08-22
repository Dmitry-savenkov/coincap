import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { AppContext } from '../store';

const AddCryptocurrency = ({
  route: {
    params: { name, priceUsd },
  },
}) => {
  const { state, dispatch } = useContext(AppContext);
  const [value, setValue] = useState('');
  console.log(state.portfolio.cryptocurrencies);

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: '600' }}>{name}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{
            width: 200,
            height: 30,
            borderRadius: 5,
            paddingHorizontal: 10,
            backgroundColor: '#8E8E8E',
          }}
          placeholder={'0'}
          value={value}
          onChangeText={(value) => setValue(value)}
          autoFocus
          keyboardType="decimal-pad"
        />
        <TouchableOpacity
          onPress={() => {
            dispatch({
              type: 'SET_CRYPTOCURRENCY_IN_PORTFOLIO',
              payload: { price: (Number(value) * priceUsd).toFixed(2), cryptocurrency: name },
            });
          }}
          style={{
            width: 50,
            height: 30,
            backgroundColor: '#3AA43E',
            borderRadius: 10,
            marginHorizontal: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>Buy</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text>total price: ${(Number(value) * priceUsd).toFixed(2)}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddCryptocurrency;
