import React from 'react';

type PropsType = {
    title: string
    callback: () => void
    disabled?: boolean
}

export const Button = ({title, callback, ...props}: PropsType) => {
    return (
        <button onClick={callback} disabled={props.disabled}>{title}</button>
    )
};

