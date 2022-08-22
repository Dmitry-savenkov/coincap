// Lib
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

import { AppContext } from '../store';

const AddCryptocurrency = ({
  route: {
    params: { name, priceUsd },
  },
}) => {
  const { dispatch } = useContext(AppContext);
  const [value, setValue] = useState('');

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[styles.titleWrapper]}>
        <Text style={[styles.title]}>{name}</Text>
      </View>
      <View style={[styles.form]}>
        <TextInput
          style={[styles.textInput]}
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
          style={[styles.button]}
        >
          <Text style={[styles.buttonText]}>Buy</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.priceWrapper]}>
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
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  form: {
    flexDirection: 'row',
  },
  textInput: {
    width: 200,
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#8E8E8E',
  },
  button: {
    width: 50,
    height: 40,
    backgroundColor: '#3AA43E',
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  priceWrapper: {
    marginTop: 10,
  },
});

export default AddCryptocurrency;
