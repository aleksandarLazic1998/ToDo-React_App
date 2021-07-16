import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./ducks/user";

const rootReducer = combineReducers({
  users: userReducer,
});

// Saga Middleware
const saga = createSagaMiddleware();

// All middlewares
const middlewares = [];

// Redux Store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

// saga.run()

export default store;
