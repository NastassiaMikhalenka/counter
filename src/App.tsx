import React, {useState} from 'react';
import './App.css';
import {Setting} from "./components/Setting";
import {Counter} from "./components/Counter";

export type messageType = `Enter values and press "SET"` | null | "incorrect"

function App() {
    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [count, setCount] = useState<number>(minValue);
    const [error, setError] = useState<boolean>(false)
    const [message, setMessage] = useState<messageType>(null)

    return (
        <div className="app">

            <Setting
                maxValue={maxValue}
                minValue={minValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                setError={setError}
                setMessage={setMessage}
                setCount={setCount}
                message={message}
                error={error}
            />
            <Counter
                setCount={setCount}
                count={count}
                minValue={minValue}
                maxValue={maxValue}
                error={error}
                message={message}

            />
        </div>
    );
}

export default App;