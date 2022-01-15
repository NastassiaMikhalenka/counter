import React from "react";
import {Button} from "./Button";
import {messageType} from "../App";
import {Count} from "./Count";
import {initialStateType, onClickDischargeHandlerAC, onClickIncHandlerAC} from "../redux/Reducers";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../redux/store";

type PropsType = {
    message: messageType
    error: boolean
}

export const Counter = ({error, message}: PropsType) => {
    let state = useSelector<rootReducerType, initialStateType>(state => state.counter)
    let dispatch = useDispatch()

    const onClickHandler = () => state.count < state.maxValue ? dispatch(onClickIncHandlerAC(state.count)) : null;
    const onClickDischargeHandler = () => {
        localStorage.clear()
        dispatch(onClickDischargeHandlerAC(state.minValue));
    }

    return (
        <div className={"appWrapper"}>
            <div className={"wrapperCount"}>
                {
                    error && message ? "incorrect" : message ? message
                        : <Count value={state.count} maxValue={state.maxValue}/>
                }
            </div>
            <div className={"wrapperButton"}>
                <Button title={"Inc"} callback={onClickHandler}
                        disabled={message ? true : state.count === state.maxValue}/>
                <Button title={"Reset"} callback={onClickDischargeHandler}
                        disabled={message ? true : state.count === state.minValue}/>
            </div>
        </div>
    )
}