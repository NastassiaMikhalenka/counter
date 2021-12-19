import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Count} from "./components/Count";
import {Setting} from "./components/Setting";

export type messageType = `Enter values and press "SET"` | null | "incorrect"

function App() {
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(5)
  const [count, setCount] = useState<number>(minValue);
  const [error, setError] = useState<boolean>(false)
  const [message, setMessage] = useState<messageType>(null)

  const onClickHandler = () => count < maxValue ? setCount(count + 1) : null;

  const onClickDischargeHandler = () => setCount(minValue);

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
      </div>
  );
}

export default App;