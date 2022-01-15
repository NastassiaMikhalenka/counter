import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import {Setting} from "./components/Setting";
import {Counter} from "./components/Counter";
// import {
//     initialState, initialStateType,
//     onChangeMaxValueAC,
//     onChangeMinValueAC, onClickDischargeHandlerAC,
//     onClickIncHandlerAC,
//     reducer,
//     updateDataValueAC
// } from "./redux/Reducers";
// import {useDispatch, useSelector} from "react-redux";
// import {rootReducerType} from "./redux/store";

export type messageType = `Enter values and press "SET"` | null | "incorrect"

function App() {
    const [error, setError] = useState<boolean>(false)
    const [message, setMessage] = useState<messageType>(null)

    // const [state, dispatch] = useReducer(reducer, initialState)

    // useEffect(() => {
    //     // let countValueAsString = localStorage.getItem('countValue')
    //     // if (countValueAsString) {
    //     //     let newValue = JSON.parse(countValueAsString)
    //     //     dispatch(updateDataValueAC(newValue))
    //     // }
    //     let minValueAsString = localStorage.getItem('minValue')
    //     if (minValueAsString) {
    //         let newValue = JSON.parse(minValueAsString)
    //         dispatch(onChangeMinValueAC(newValue))
    //     }
    //     let maxValueAsString = localStorage.getItem('maxValue')
    //     if (maxValueAsString) {
    //         let newValue = JSON.parse(maxValueAsString)
    //         dispatch(onChangeMaxValueAC(newValue))
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('countValue', JSON.stringify(state.count))
    //     localStorage.setItem('minValue', JSON.stringify(state.minValue))
    //     localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
    // }, [state])

    return (
        <div className="app">
            <Setting
                setError={setError}
                setMessage={setMessage}
                message={message}
                error={error}
            />
            <Counter
                error={error}
                message={message}
            />
        </div>
    );
}

export default App;