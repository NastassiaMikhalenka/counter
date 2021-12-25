import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import {Setting} from "./components/Setting";
import {Counter} from "./components/Counter";
import {
    initialState,
    onChangeMaxValueAC,
    onChangeMinValueAC, onClickDischargeHandlerAC,
    onClickIncHandlerAC,
    reducer,
    updateDataValueAC
} from "./redux/Reducers";

export type messageType = `Enter values and press "SET"` | null | "incorrect"

function App() {
    // const [minValue, setMinValue] = useState(0)
    // const [maxValue, setMaxValue] = useState(5)
    // const [count, setCount] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)
    const [message, setMessage] = useState<messageType>(null)

    const [state, dispatch] = useReducer(reducer, initialState)

    // setting
    const onChangeMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.valueAsNumber
        dispatch(onChangeMaxValueAC(value))
        if (value < 0 || value <= state.minValue || state.minValue < 0) {
            setMessage("incorrect")
            setError(true)
        } else {
            setMessage(`Enter values and press "SET"`)
            setError(false)
        }
    }

    const onChangeMinValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.valueAsNumber
        dispatch(onChangeMinValueAC(value))
        if (value < 0 || value >= state.maxValue || state.maxValue < 0) {
            setMessage("incorrect")
            setError(true)
        } else {
            setMessage(`Enter values and press "SET"`)
            setError(false)
        }
    }

    const updateDataCallBackHandler = () => {
        setMessage(null)
        dispatch(updateDataValueAC(state.minValue))
        // localStorage.setItem('minValue', JSON.stringify(minValue))
        // localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }


    const btnDisabled = state.minValue < 0 || state.maxValue < 0 || state.minValue === state.maxValue ||
        state.minValue > state.maxValue

    // counter
    const onClickHandler = () => state.count < state.maxValue ? dispatch(onClickIncHandlerAC(state.count)) : null;
    const onClickDischargeHandler = () => dispatch(onClickDischargeHandlerAC(state.minValue));

    return (
        <div className="app">
            <Setting
                onChangeMaxValueHandler={onChangeMaxValueHandler}
                onChangeMinValueHandler={onChangeMinValueHandler}
                maxValue={state.maxValue}
                minValue={state.minValue}
                setError={setError}
                setMessage={setMessage}
                message={message}
                error={error}
                btnDisabled={btnDisabled}
                updateDataCallBackHandler={updateDataCallBackHandler}
            />
            <Counter
                onClickHandler={onClickHandler}
                onClickDischargeHandler={onClickDischargeHandler}
                count={state.count}
                minValue={state.minValue}
                maxValue={state.maxValue}
                error={error}
                message={message}
            />
        </div>
    );
}

export default App;