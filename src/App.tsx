import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Count} from "./components/Count";

type messageType = `Enter values and press "SET"` | null | "incorrect"

function App() {
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(5)
  const [count, setCount] = useState<number>(minValue);
  const [error, setError] = useState<boolean>(false)
  const [message, setMessage] = useState<messageType>(null)

  const onClickHandler = () => count < maxValue ? setCount(count + 1) : null;

  const onClickDischargeHandler = () => setCount(minValue);

  const onChangeMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.valueAsNumber
    setMaxValue(value)
    if (value < 0 || value <= minValue || minValue < 0) {
      setMessage("incorrect")
      setError(true)
    } else {
      setMessage(`Enter values and press "SET"` )
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
      setMessage(`Enter values and press "SET"` )
      setError(false)
    }

  }

  const updateDataCallBackHandler = () => {
    setMessage(null)
    setCount(minValue)
  }

  const classNameErrorInputMax = () => error ? 'error' : ''
  const classNameErrorInputMin = () => error ? 'error' : ''

  const btnDisabled = minValue < 0 || maxValue < 0 || minValue === maxValue ||
      minValue > maxValue || message !== `Enter values and press "SET"`

  return (
      <div className="app">
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
            <Button title={"Set"} callback={updateDataCallBackHandler} disabled={btnDisabled}/>
          </div>
        </div>
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