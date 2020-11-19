import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";

export default function App() {
  return (
    <View style={styles.background}>
      <Navbar
        title='Todo App'
      />
      <View style={styles.container}>
        <AddTodo/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'grey'
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
