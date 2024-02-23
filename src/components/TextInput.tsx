/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  TextInput as TextInputComponent,
  Dimensions,
  View,
} from 'react-native';

const { height } = Dimensions.get('window');
import type { TextInputProps, ViewStyle } from 'react-native';
interface MyTextInputProps extends TextInputProps {
  renderLeftIcon?: () => JSX.Element | null | undefined;
  renderRightIcon?: () => JSX.Element | null | undefined;
  errorColor?: string;
  error?: boolean;
  mainViewStyle?: ViewStyle;
  parentViewStyle?: ViewStyle;
}

const TextInput = (props: MyTextInputProps) => {
  const {
    errorColor,
    renderLeftIcon,
    renderRightIcon,
    parentViewStyle,
    placeholder,
    ...rest
  } = props;

  return (
    <View style={{ flexDirection: 'row', ...parentViewStyle }}>
      {renderLeftIcon && renderLeftIcon()}
      <TextInputComponent
        style={{
          minHeight: height * 0.05,
          borderWidth: 1,
          borderColor: '#B2C3C1',
          borderRadius: 5,
          marginTop: 10,
          paddingLeft: 10,
        }}
        accessibilityLabel={placeholder || 'textinput'}
        {...rest}
      />
      {renderRightIcon && renderRightIcon()}
    </View>
  );
};

export default TextInput;
