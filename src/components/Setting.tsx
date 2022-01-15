import React, {useState} from "react";
import {Button} from "./Button";
import {messageType} from "../App";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../redux/store";
import {onChangeMaxValueAC, onChangeMinValueAC, updateDataValueAC} from "../redux/Reducers";

type PropsType = {
    setError: (error: boolean) => void
    setMessage: (message: messageType) => void
    message: messageType
    error: boolean
}

export const Setting = ({error, message, setError, setMessage}: PropsType) => {
    let minValue = useSelector<rootReducerType, number>(state => state.counter.minValue)
    let maxValue = useSelector<rootReducerType, number>(state => state.counter.maxValue)
    let dispatch = useDispatch()

    const onChangeMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.valueAsNumber
        dispatch(onChangeMaxValueAC(value))
        if (value < 0 || value <= minValue || minValue < 0) {
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
        if (value < 0 || value >= maxValue || maxValue < 0) {
            setMessage("incorrect")
            setError(true)
        } else {
            setMessage(`Enter values and press "SET"`)
            setError(false)
        }
    }

    const updateDataCallBackHandler = () => {
        if (maxValue - minValue > 0 || maxValue - minValue !== 0) {
            setMessage(null)
            // localStorage.setItem('minValue', state.minValue.toString())
            // localStorage.setItem('maxValue', state.maxValue.toString())
            dispatch(updateDataValueAC(minValue))
        } else {
            setError(true)
        }
    }

    const btnDisabled = minValue < 0 || maxValue < 0 || minValue === maxValue ||
        minValue > maxValue

    const classNameErrorInputMax = () => error ? 'error' : ''
    const classNameErrorInputMin = () => error ? 'error' : ''

    return (
        <div className={"appWrapper"}>
            <div className={"wrapperCount"}>
                <div className={"valueContainer"}>
                    <span>Max value</span>
                    <input
                        className={classNameErrorInputMax()}
                        type={"number"} value={maxValue}
                        onChange={onChangeMaxValueHandler}/>
                </div>
                <div className={"valueContainer"}>
                    <span>Start value</span>
                    <input
                        className={classNameErrorInputMin()}
                        type={"number"} value={minValue}
                        onChange={onChangeMinValueHandler}/>
                </div>
            </div>
            <div className={"wrapperButton"}>
                <Button title={"Set"} callback={updateDataCallBackHandler}
                        disabled={btnDisabled || message !== `Enter values and press "SET"`}/>
            </div>
        </div>
    )
}