import React from "react";

type PropsType = {
    value: number
    maxValue: number
}

export const Count = ({value, maxValue}: PropsType) => {
    const classCount = value === maxValue ? "bad" : "good";

    return (
        <p className={classCount}>{value}</p>
    )
};