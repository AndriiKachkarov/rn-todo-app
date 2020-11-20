import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";

export const MainScreen = ({addTodo, removeTodo, todos}) => {
  return (
    <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>

        <FlatList
            keyExtractor={item => item.id}
            data={todos}
            renderItem={({item}) => (<Todo todo={item} onRemove={removeTodo}/>)}
            style={styles.list}
        />
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 20
    },
});