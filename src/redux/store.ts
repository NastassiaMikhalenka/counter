import {combineReducers, createStore} from "redux";
import {reducer} from "./Reducers";

let rootReducer = combineReducers({
    counter: reducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)