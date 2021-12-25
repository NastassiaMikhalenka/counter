import React from "react";
import {Button} from "./Button";
import {messageType} from "../App";
import {Count} from "./Count";

type PropsType = {
    maxValue: number
    minValue: number
    message: messageType
    error: boolean
    count: number
    onClickDischargeHandler: () => void
    onClickHandler: () => void
}


export const Counter = ({
                            onClickHandler, onClickDischargeHandler,
                            count,
                            minValue, maxValue,
                            error, message
                        }: PropsType) => {

    // const onClickHandler = () => count < maxValue ? setCount(count + 1) : null;
    // const onClickDischargeHandler = () => setCount(minValue);

    return (
        <div className={"appWrapper"}>
            <div className={"wrapperCount"}>
                {
                    error && message ? "incorrect" : message ? message
                        : <Count value={count} maxValue={maxValue}/>
                }
            </div>
            <div className={"wrapperButton"}>
                <Button title={"Inc"} callback={onClickHandler} disabled={message ? true : count === maxValue}/>
                <Button title={"Reset"} callback={onClickDischargeHandler}
                        disabled={message ? true : count === minValue}/>
            </div>
        </div>
    )
}