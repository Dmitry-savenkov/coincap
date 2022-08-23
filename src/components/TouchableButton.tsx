import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type TouchableButtonType = {
  text: string;
  onPress: () => void;
  stylesWrapper?: Record<string, unknown>;
  stylesText?: Record<string, unknown>;
};

const TouchableButton = ({
  text,
  onPress,
  stylesWrapper = {},
  stylesText = {},
}: TouchableButtonType) => {
  return (
    <TouchableOpacity onPress={onPress} style={[stylesWrapper]}>
      <Text style={[stylesText]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TouchableButton;
