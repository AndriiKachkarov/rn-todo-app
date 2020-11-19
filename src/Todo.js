import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";

export const Todo = ({todo, onRemove}) => {

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => console.log('Pressed')}
      onLongPress={() => {onRemove(todo.id)}}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>

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
