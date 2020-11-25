import React, {useContext, useReducer} from 'react';
import {Alert} from 'react-native';
import {TodoContext} from "./todoContext";
import {todoReducer} from "./todoReducer";
import {
    ADD_TODO,
    CLEAR_ERROR,
    FETCH_TODOS,
    HIDE_LOADER,
    REMOVE_TODO,
    SHOW_ERROR,
    SHOW_LOADER,
    UPDATE_TODO
} from "../types";
import {ScreenContext} from "../screen/screenContext";
import {Http} from "../../http";

export const TodoState = ({children}) => {
    const initialState = {
        todos: [],
        loading: false,
        error: null

    };

    const {changeScreen} = useContext(ScreenContext);

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodo = async title => {
        clearError();
        try {
            const data = await Http.post(
                'https://react-native-todo-app-94baa.firebaseio.com/todos.json',
                {title}
            );
            dispatch({type: ADD_TODO, title, id: data.name})
        } catch (e) {
            showError('Something went wrong. Try again.');
        }
    };

    const removeTodo = id => {
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
                    onPress: async () => {
                        changeScreen(null);
                        try {
                            await Http.delete(`https://react-native-todo-app-94baa.firebaseio.com/todos/${id}.json`);
                            dispatch({type: REMOVE_TODO, id});
                        } catch (e) {
                            showError('Something went wrong. Try again.');
                        }
                        dispatch({type: REMOVE_TODO, id})
                    }
                }
            ],
            {cancelable: false}
        );
    };

    const fetchTodos = async () => {
        showLoader();
        clearError();
        try {
            const data = await Http.get(`https://react-native-todo-app-94baa.firebaseio.com/todos.json`);
            const todos = Object.keys(data).map(key => ({
                    ...data[key], id: key
                })
            );
            dispatch({type: FETCH_TODOS, todos});
        } catch (e) {
            showError('Something went wrong. Try again.');
        } finally {
            hideLoader();
        }

    };

    const updateTodo = async (id, title) => {
        clearError();
        try {
            await Http.patch(`https://react-native-todo-app-94baa.firebaseio.com/todos/${id}.json`, {title});
            dispatch({type: UPDATE_TODO, id, title});
        } catch (e) {
            showError('Something went wrong. Try again.');
        }


    };

    const showLoader = () => dispatch({type: SHOW_LOADER});

    const hideLoader = () => dispatch({type: HIDE_LOADER});

    const showError = error => dispatch({type: SHOW_ERROR, error});

    const clearError = () => dispatch({type: CLEAR_ERROR});

    return <TodoContext.Provider value={{
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        addTodo,
        removeTodo,
        updateTodo,
        fetchTodos
    }}>
        {children}
    </TodoContext.Provider>
}
