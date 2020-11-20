import React from 'react';
import {StyleSheet, View, FlatList, Image} from 'react-native';
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";

export const MainScreen = ({addTodo, removeTodo, todos, openTodo}) => {
    let content = (
        <FlatList
            keyExtractor={item => item.id}
            data={todos}
            renderItem={({item}) => (<Todo todo={item} onRemove={removeTodo} onOpen={openTodo}/>)}
            style={styles.list}
        />
    );

    if (todos.length === 0) {
        content = (
          <View style={styles.imgWrap}>
              <Image style={styles.image} source={require('../../assets/no-items.png')}/>
          </View>
        );
    }


    return (
        <View style={styles.container}>
            <AddTodo onSubmit={addTodo}/>
            {content}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 20
    },
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
});