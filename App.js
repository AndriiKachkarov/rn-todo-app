import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";

export default function App() {
  const [todos, setTodos] =useState([]);

  const addTodo = (title) => {
    setTodos((prevTodos) => [...prevTodos, {
      id: Date.now().toString(),
      title
    }]);
  };

  return (
    <View style={styles.background}>
      <Navbar
        title='Todo App'
      />
      <View style={styles.container}>
        <AddTodo
          onSubmit={addTodo}
        />
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
