import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

type TitleType = {
  title: string;
};

const Title = ({ title }: TitleType) => {
  return (
    <View style={[styles.titleWrapper]}>
      <Text style={[styles.title]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Title;
