import React, {useState} from 'react';
import {StyleSheet, View, Text, Button,} from 'react-native';
import {THEME} from '../theme'
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";

export const TodoScreen = ({todo, goBack, onRemove}) => {
    const [modal, setModal] = useState(false);

    return (
        <View style={styles.container}>
            <EditModal visible={modal} onCancel={() => setModal(false)}/>

            <AppCard style={styles.card}>
                <Text style={styles.title }>{todo.title}</Text>
                <Button title='Edit' onPress={() => setModal(true)}/>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title='Back' color={THEME.GREY_COLOR} onPress={goBack}/>
                </View>
                <View style={styles.button}>
                    <Button title='Delete' color={THEME.DANGER_COLOR} onPress={() => onRemove(todo.id)}/>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 20
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '45%'
    },
    title: {
        fontSize: 20,
    },
    card: {
        marginBottom: 20,
        padding: 15
    }
});