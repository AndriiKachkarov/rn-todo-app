import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Alert, Keyboard} from "react-native";
import {AntDesign} from '@expo/vector-icons'
import {THEME} from "../theme";

export const AddTodo = ({onSubmit}) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
      Keyboard.dismiss();
    } else {
      Alert.alert('Todos name cannot e empty!');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder='Enter todos name...'
        autoCorrect={false}
        autoCapitalize='none'
      />
      <AntDesign.Button
          onPress={pressHandler}
          name='pluscircleo'
          color={THEME.MAIN_COLOR}
      >
        Add
      </AntDesign.Button>
    </View>
  )
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    width: '60%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: THEME.MAIN_COLOR
  }
});
