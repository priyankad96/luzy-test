import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../reducers';
import AppNavigator from '../navigation/index';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react'


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, appReducer);
let persistsStore = createStore(persistedReducer,applyMiddleware(thunk));
let persistor = persistStore(persistsStore);

export default class config extends React.Component {

    render() {
        return (
            <Provider store={persistsStore}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppNavigator/>
                </PersistGate>
            </Provider>
        );
    }
}