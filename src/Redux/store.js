import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countedReducer from "./counter";
import TodoReducer from "./Todo";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";


const rootReduce = combineReducers({
    counter: countedReducer,
    Todos: TodoReducer
});

const PersistConfig = {
    key: "root",
    verson: 1,
    storage
};

const persistedReducer = persistReducer(PersistConfig, rootReduce)

export const store = configureStore({
    reducer: persistedReducer
})