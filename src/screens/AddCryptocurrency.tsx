// Lib
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

// Components
import TouchableButton from '../components/TouchableButton';

import { AppContext } from '../store';

// Types
import { AddCryptocurrencyNavigationProps } from '../types/navigation';

const AddCryptocurrency = ({
  route: {
    params: { name, priceUsd },
  },
}: AddCryptocurrencyNavigationProps) => {
  const { dispatch } = useContext(AppContext);
  const [textInputValue, setTextInputValue] = useState('');

  const addCryptocurrencyToPortfolio = () => {
    dispatch({
      type: 'SET_CRYPTOCURRENCY_IN_PORTFOLIO',
      payload: { price: (Number(textInputValue) * +priceUsd).toFixed(2), cryptocurrency: name },
    });
  };

  const regExTextInputFormatter = (value: string) => {
    const regExValue = value.replace(/[^0-9\.]/g, '');
    setTextInputValue(regExValue);
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[styles.titleWrapper]}>
        <Text style={[styles.title]}>{name}</Text>
      </View>
      <View style={[styles.form]}>
        <TextInput
          style={[styles.textInput]}
          placeholder={'0'}
          value={textInputValue}
          onChangeText={(value) => {
            regExTextInputFormatter(value);
          }}
          autoFocus
          keyboardType="decimal-pad"
        />
        <TouchableButton
          disabled={!textInputValue}
          text="Buy"
          stylesWrapper={styles.button}
          stylesText={styles.buttonText}
          onPress={addCryptocurrencyToPortfolio}
        />
      </View>
      <View style={[styles.priceWrapper]}>
        <Text>total price: ${(Number(textInputValue) * +priceUsd).toFixed(2)}</Text>
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
