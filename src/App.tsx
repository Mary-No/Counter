import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Settings from './components/Settings/Settings';

export const START_VALUE = 0
export const MAX_VALUE = 4


function App() {
    let [currentValue, setCurrentValue] = useState(START_VALUE)
    let [startValue, setStartValue] = useState(START_VALUE)
    let [maxValue, setMaxValue] = useState(MAX_VALUE)


    let [error, setError] = useState(false);

    function errorHandler(flag:boolean) {
        setError(flag)
    }

    function incrementCurrentValue(value: number) {
        setCurrentValue(value + 1)
    }

    function resetCurrentValue() {
        setCurrentValue(startValue)
    }

    function setLimitValues(min: number, max: number) {
        setStartValue(min)
        setMaxValue(max)
        setCurrentValue(startValue)
    }

    function changeInputValue(type: string, value: number) {
        if (type === 'max') {
            setMaxValue(value)
        } else {
            setStartValue(value);
        }
    }

    return (

        <div className="App">

            <Settings errorHandler={errorHandler}
                      setLimitValues={setLimitValues}
                      changeInputValue={changeInputValue}
                      currentValue={currentValue}
                      startValue={startValue}
                      maxValue={maxValue}
                      error={error}/>

            <Counter incrementCurrentValue={incrementCurrentValue}
                     resetCurrentValue={resetCurrentValue}
                     currentValue={currentValue}
                     startValue={startValue}
                     maxValue={maxValue}
                     error={error}/>
        </div>
    );
}

export default App;
