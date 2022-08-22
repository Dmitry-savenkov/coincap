// Lib
import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';

const Loader = () => <ActivityIndicator size="large" style={[styles.loader]} />;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default Loader;
