import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Image, Dimensions} from 'react-native';
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";
import {THEME} from "../theme";


export const MainScreen = ({addTodo, removeTodo, todos, openTodo}) => {
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2);


    useEffect(() => {
        const update = () => {
            setDeviceWidth(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2);
        };

        Dimensions.addEventListener('change', update);

        return () => {
            Dimensions.removeEventListener('change', update);
        }
    });


    let content = (
        <View style={{width: deviceWidth}}>
            <FlatList
                keyExtractor={item => item.id}
                data={todos}
                renderItem={({item}) => (<Todo todo={item} onRemove={removeTodo} onOpen={openTodo}/>)}
                style={styles.list}
            />
        </View>

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
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
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