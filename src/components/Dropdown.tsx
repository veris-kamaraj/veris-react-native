/* eslint-disable react-native/no-inline-styles */
import { View, type ViewStyle, type TextStyle } from 'react-native';
import React, { useState, type FC } from 'react';
import { Dropdown as DropdownComponent } from 'react-native-element-dropdown';
interface DropdownProps {
  labelField: string;
  valueField: string;
  search?: boolean;
  dropdownStyle: ViewStyle;
  placeholderStyle: TextStyle;
  inputSearchStyle?: TextStyle;
  data: any[];
  renderLeftIcon?: (visible?: boolean) => JSX.Element | null | undefined;
  renderRightIcon?: (visible?: boolean) => JSX.Element | null | undefined;
  activeColor?: string;
  selectedTextStyle?: TextStyle;
  searchPlaceholder?: string;
  value: any;
  onChange: (item: any) => void;
  renderItem?: (
    item: any,
    selected?: boolean
  ) => JSX.Element | null | undefined;
}
const Dropdown: FC<DropdownProps> = (props) => {
  const {
    labelField,
    valueField,
    search,
    dropdownStyle,
    placeholderStyle,
    inputSearchStyle,
    data,
    renderLeftIcon,
    renderRightIcon,
    activeColor,
    selectedTextStyle,
    searchPlaceholder,
    value,
    onChange,
    renderItem,
  } = props;

  const [isFocus, setIsFocus] = useState(false);

  const activeColorStyle =
    activeColor && isFocus ? { borderColor: activeColor } : {};
  return (
    <View style={{ width: '100%' }}>
      <DropdownComponent
        style={[dropdownStyle, activeColorStyle]}
        placeholderStyle={placeholderStyle}
        selectedTextStyle={selectedTextStyle}
        inputSearchStyle={inputSearchStyle}
        data={data}
        search={search}
        maxHeight={300}
        labelField={labelField}
        valueField={valueField}
        placeholder={'Select item'}
        searchPlaceholder={searchPlaceholder}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item: any) => {
          setIsFocus(false);
          onChange(item);
        }}
        renderLeftIcon={renderLeftIcon}
        renderRightIcon={renderRightIcon}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Dropdown;
