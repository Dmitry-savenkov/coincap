// Lib
import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

// Components
import TouchableButton from '../components/Button/TouchableButton';

// UI
import { colors } from '../constants';

// Types
import { AddCryptocurrencyNavigationProps } from '../types/navigation';

import { AppContext } from '../store';

const AddCryptocurrency = ({
  route: {
    params: { name, priceUsd },
  },
}: AddCryptocurrencyNavigationProps) => {
  const { dispatch } = useContext(AppContext);
  const [textInputValue, setTextInputValue] = useState('');

  const addCryptocurrencyToPortfolio = () => {
    dispatch({
      type: 'ADD_CRYPTOCURRENCY_IN_PORTFOLIO',
      payload: { price: (Number(textInputValue) * +priceUsd).toFixed(2), cryptocurrency: name },
    });
  };

  const regExTextInputFormatter = (value: string) => {
    // only numbers with one dot
    const regExValue = value
      .replace(/[^.\d]/g, '')
      .replace(/^(\d*\.?)|(\d*)\.?/g, '$1$2')
      .replace(/^(\.+)/g, '');

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
    backgroundColor: colors.grey,
  },
  button: {
    width: 50,
    height: 40,
    backgroundColor: colors.green,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  priceWrapper: {
    marginTop: 10,
  },
});

export default AddCryptocurrency;
