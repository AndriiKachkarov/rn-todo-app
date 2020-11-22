import React, {useState} from 'react';
import {Alert, Text} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import {MainLayout} from "./src/MainLayout";
import {TodoState} from "./src/context/todo/TodoState";
import {ScreenState} from "./src/context/screen/ScreenState";

async function loadApp() {
    await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
    })
}

export default function App() {
    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return <AppLoading
            startAsync={loadApp}
            onError={err => Alert.alert('Something went wrong! You should try to reload the app!')}
            onFinish={() => setIsReady(true)}
        />
    }

    return (
        <ScreenState>
            <TodoState>
                <MainLayout/>
            </TodoState>
        </ScreenState>

    );
}


