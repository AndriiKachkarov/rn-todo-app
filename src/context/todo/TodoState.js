import React, {useContext, useReducer} from 'react';
import {Alert} from 'react-native';
import {TodoContext} from "./todoContext";
import {todoReducer} from "./todoReducer";
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from "../types";
import {ScreenContext} from "../screen/screenContext";

export const TodoState = ({children}) => {
    const initialState = {
        todos: [
            {id: '1', title: 'Learn React Native'},
            {id: '2', title: 'Create React Native App'},
            {id: '3', title: 'Create React Native App'},
            {id: '4', title: 'Create React Native App'},
            {id: '5', title: 'Create React Native App'},
            {id: '6', title: 'Create React Native App'},
            {id: '7', title: 'Create React Native App'},
            {id: '8', title: 'Create React Native App'},
            {id: '9', title: 'Create React Native App'},
            {id: '10', title: 'Create React Native App'},
            {id: '11', title: 'Create React Native App'},
            {id: '12', title: 'Create React Native App'},
            {id: '13', title: 'Create React Native'},
        ]
    };

    const {changeScreen} = useContext(ScreenContext)

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodo  = title => dispatch({type: ADD_TODO, title});
    const removeTodo  = id => {
        const todo = state.todos.find(t => t.id === id);

        Alert.alert(
            'Remove the todo',
            `Are you sure you are going to delete ${todo.title}?`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        changeScreen(null);
                        dispatch({type: REMOVE_TODO, id})
                    }
                }
            ]
        );
    };
    const updateTodo  = (id, title) => dispatch({type: UPDATE_TODO, id, title});

    return <TodoContext.Provider value={{
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo
    }}>
        {children}
    </TodoContext.Provider>
}
