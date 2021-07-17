import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./ducks/user";
import { getUsersData } from "./sagas/rootSaga";

const rootReducer = combineReducers({
  users: userReducer,
});

// Saga Middleware
const saga = createSagaMiddleware();

// All middlewares
const middlewares = [saga];

// Redux Store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

saga.run(getUsersData)

export default store;
