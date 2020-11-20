import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

export default function App() {
    const [todoId, setTodoId] = useState(null);
    const [todos, setTodos] = useState([]);

    const addTodo = (title) => {
        setTodos((prevTodos) => [...prevTodos, {
            id: Date.now().toString(),
            title
        }]);
    };

    const removeTodo = id => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    let content = (<MainScreen
        addTodo={addTodo}
        removeTodo={removeTodo}
        todos={todos}
    />);

    if (todoId) {
      content = (<TodoScreen/>);
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
