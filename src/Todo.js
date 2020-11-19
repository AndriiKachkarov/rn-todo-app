import React from 'react';
import {View, StyleSheet, Text} from "react-native";

export const Todo = ({todo}) => {

  return (
    <View style={styles.todo}>
      <Text>{todo.title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10
  }
});