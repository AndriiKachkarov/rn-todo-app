import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";
import {Todo} from "./src/Todo";

export default function App() {
  const [todos, setTodos] =useState([]);

  const addTodo = (title) => {
    setTodos((prevTodos) => [...prevTodos, {
      id: Date.now().toString(),
      title
    }]);
  };

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }

  return (
    <View style={styles.background}>
      <Navbar
        title='Todo App'
      />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>

        <FlatList
          keyExtractor={item => item.id}
          data={todos}
          renderItem={({item}) => (<Todo todo={item} onRemove={removeTodo}/>)}
          style={styles.list}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  list: {
  }
});
