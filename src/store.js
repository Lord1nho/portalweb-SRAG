import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';

const reducer = combineReducers({
    authReducer
})

const store = configureStore({
    reducer,
})

export default store;