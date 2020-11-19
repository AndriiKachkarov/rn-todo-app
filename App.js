import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddTodo} from "./src/AddTodo";
import {Todo} from "./src/Todo";

export default function App() {
  const [todos, setTodos] =useState([
    {id: '1', title: 'test'},
    {id: '2', title: 'test'},
    {id: '3', title: 'test'},
    {id: '4', title: 'test'},
    {id: '5', title: 'test'},
    {id: '6', title: 'test'},
    {id: '7', title: 'test'},
    {id: '8', title: 'test'},
    {id: '9', title: 'test'},
    {id: '10', title: 'test'},
    {id: '11', title: 'test'},
    {id: '12', title: 'test'},
    {id: '13', title: 'test'},
  ]);

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
        <AddTodo onSubmit={addTodo}/>

        <FlatList
          keyExtractor={item => item.id}
          data={todos}
          renderItem={({item}) => (<Todo key={item.id} todo={item}/>)}
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
    flax: 1,
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  list: {
  }
});
