/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Dropdown, TextInput } from 'veris-react-native';
import { FontAwesome } from '@expo/vector-icons';
export default function App() {
  const [value, setValue] = React.useState(null);
  return (
    <View style={styles.container}>
      <Button
        onPress={() => console.log('Pressed')}
        text="Button"
        style={{
          height: 50,
          width: 100,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        textStyle={{ color: '#fff', fontWeight: 'bold' }}
      />

      <Dropdown
        data={[
          { label: 'Banana', value: 'banana' },
          { label: 'Mango', value: 'mango' },
          { label: 'Pear', value: 'pear' },
        ]}
        labelField="label"
        valueField="value"
        dropdownStyle={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        inputSearchStyle={styles.inputSearchStyle}
        value={value}
        onChange={(item) => {
          setValue(item.value);
        }}
        renderLeftIcon={() => {
          return <FontAwesome name="angle-down" size={24} color="black" />;
        }}
        selectedTextStyle={styles.selectedTextStyle}
      />

      <TextInput
        placeholder="Enter your name"
        style={{ paddingLeft: 10 }}
        renderLeftIcon={() => {
          return (
            <View
              style={{
                padding: 5,
                borderRightWidth: 1,
                borderColor: '#B2C3C1',
              }}
            >
              <FontAwesome name="user" size={24} color="black" />
            </View>
          );
        }}
        parentViewStyle={{
          width: '100%',
          borderColor: '#B2C3C1',
          borderWidth: 1,
          marginTop: 25,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    marginLeft: 10,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 10,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
