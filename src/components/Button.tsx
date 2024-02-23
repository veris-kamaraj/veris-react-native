/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity, Text, type TextStyle } from 'react-native';
import type { TouchableOpacityProps } from 'react-native';
interface MyButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  text: string;
  textStyle?: TextStyle;
}

const Button = (props: MyButtonProps) => {
  const { style, onPress, text, textStyle, ...rest } = props;
  return (
    <TouchableOpacity
      style={[{ backgroundColor: '#003CC1' }, style]}
      onPress={onPress}
      accessibilityLabel={text}
      accessible={true}
      {...rest}
    >
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
