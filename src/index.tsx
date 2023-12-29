import React from 'react';
import { TouchableOpacity } from 'react-native';
import type { TouchableOpacityProps } from 'react-native';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export function Button(props: TouchableOpacityProps) {
  return <TouchableOpacity {...props} />;
}
