import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer} from "./Reducers";
import thunk from 'redux-thunk'
import {loadState, saveState} from "../utils/localstorage-utils";

let rootReducer = combineReducers({
    counter: reducer,
})

let preloadedState = loadState()

// const persistedCounterString = localStorage.getItem('app-state')
// if(persistedTodosString){
//     preloadedState = JSON.parse(persistedCounterString)
// }

export let store = createStore(rootReducer, preloadedState, applyMiddleware(thunk))

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
    // localStorage.setItem('app-state', JSON.stringify(store.getState()))
    // localStorage.setItem('count', JSON.stringify(store.getState().counter.count))
})


export type rootReducerType = ReturnType<typeof rootReducer>

export type AppStoreType = typeof store