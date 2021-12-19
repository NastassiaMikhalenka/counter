import React from "react";
import {Button} from "./Button";
import {messageType} from "../App";

type PropsType = {
    maxValue: number
    minValue: number
    setMinValue: (valueAsNumber: number) => void
    setMaxValue: (valueAsNumber: number) => void
    setError: (error: boolean) => void
    setMessage: (message: messageType) => void
    setCount: (minValue: number) => void
    message: messageType
    error: boolean
}

export const Setting = ({
                            error,
                            message,
                            setCount,
                            maxValue,
                            minValue,
                            setMinValue,
                            setMaxValue,
                            setError,
                            setMessage
                        }: PropsType) => {

    const onChangeMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.valueAsNumber
        setMaxValue(value)
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
        setMinValue(value)
        if (value < 0 || value >= maxValue || maxValue < 0) {
            setMessage("incorrect")
            setError(true)
        } else {
            setMessage(`Enter values and press "SET"`)
            setError(false)
        }

    }

    const updateDataCallBackHandler = () => {
        setMessage(null)
        setCount(minValue)
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }

    const classNameErrorInputMax = () => error ? 'error' : ''
    const classNameErrorInputMin = () => error ? 'error' : ''

    const btnDisabled = minValue < 0 || maxValue < 0 || minValue === maxValue ||
        minValue > maxValue

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