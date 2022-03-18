import React from 'react';
import { NavigationContainer, NavigationContainerProps } from '@react-navigation/native';
import { Text, View } from 'react-native';
import App from './app-navigation';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';

const store = configureStore()


const Root = () => (
    <NavigationContainer>
            <Provider store={store}>
            <App />
    </Provider>
        </NavigationContainer>
)

export default Root;