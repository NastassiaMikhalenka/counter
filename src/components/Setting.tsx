import React from "react";
import {Button} from "./Button";
import {messageType} from "../App";

type PropsType = {
    maxValue: number
    minValue: number
    setError: (error: boolean) => void
    setMessage: (message: messageType) => void
    message: messageType
    error: boolean
    btnDisabled: boolean
    updateDataCallBackHandler: () => void
    onChangeMinValueHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    onChangeMaxValueHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Setting = ({
                            onChangeMaxValueHandler,
                            onChangeMinValueHandler,
                            updateDataCallBackHandler,
                            btnDisabled,
                            error,
                            message,
                            maxValue,
                            minValue,
                        }: PropsType) => {

    // const onChangeMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     let value = e.currentTarget.valueAsNumber
    //     setMaxValue(value)
    //     if (value < 0 || value <= minValue || minValue < 0) {
    //         setMessage("incorrect")
    //         setError(true)
    //     } else {
    //         setMessage(`Enter values and press "SET"`)
    //         setError(false)
    //     }
    // }
    //
    // const onChangeMinValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     let value = e.currentTarget.valueAsNumber
    //     setMinValue(value)
    //     if (value < 0 || value >= maxValue || maxValue < 0) {
    //         setMessage("incorrect")
    //         setError(true)
    //     } else {
    //         setMessage(`Enter values and press "SET"`)
    //         setError(false)
    //     }
    // }
    //
    // const updateDataCallBackHandler = () => {
    //     setMessage(null)
    //     setCount(minValue)
    //     // localStorage.setItem('minValue', JSON.stringify(minValue))
    //     // localStorage.setItem('maxValue', JSON.stringify(maxValue))
    // }
    //
    // const btnDisabled = minValue < 0 || maxValue < 0 || minValue === maxValue ||
    //     minValue > maxValue

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