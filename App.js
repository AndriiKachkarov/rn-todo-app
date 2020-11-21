import React, {useState} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

async function loadApp() {
    await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
    })
}

export default function App() {
    const [isReady, setIsReady] = useState(false);
    const [todoId, setTodoId] = useState(null);
    const [todos, setTodos] = useState([
        // {id: '1', title: 'Learn React Native'},
        // {id: '2', title: 'Create React Native App'},
    ]);

    if (!isReady) {
        return <AppLoading
            startAsync={loadApp}
            onError={err => Alert.alert('Something went wrong! You should try to reload the app!')}
            onFinish={() => setIsReady(true)}
        />
    }

    const addTodo = (title) => {
        setTodos((prevTodos) => [...prevTodos, {
            id: Date.now().toString(),
            title
        }]);
    };

    const removeTodo = id => {
        const todo = todos.find(t => t.id === id);
        Alert.alert(
            'Delete todo',
            `Are you sure you want to delete "${todo.title}"?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        setTodoId(null);
                        setTodos(prev => prev.filter(todo => todo.id !== id));
                    }
                }
            ]
        );
    };

    const updateTodo = (id, title) => {
        setTodos(old => old.map(todo => {
            if (todo.id === id) {
                todo.title = title;
            }
            return todo;
        }))
    };

    let content = (<MainScreen
        addTodo={addTodo}
        removeTodo={removeTodo}
        todos={todos}
        openTodo={(id) => {
            setTodoId(id)
        }}
    />);

    if (todoId) {
        content = (<TodoScreen
                onRemove={removeTodo}
                todo={todos.find(todo => todo.id === todoId)}
                goBack={() => setTodoId(null)}
                onSave={updateTodo}
            />
        );
    }

    return (
        <View style={styles.background}>
            <Navbar
                title='Todo App'
            />
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    list: {}
});
