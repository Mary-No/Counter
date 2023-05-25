import React, {useState} from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Settings from './components/Settings/Settings';

export type DataCounterType = {
    startValue: number,
    maxValue: number,
    currentValue: number
}

function App() {
    let [counter, setCounter] = useState<DataCounterType>(
        {
            startValue : 0,
            maxValue: 5,
            currentValue: 0
        }
    )
    let [error, setError] = useState('');

    function limit(){
        if(counter.currentValue === counter.maxValue){
            setError(String(counter.currentValue))
        }else if(counter.startValue<0){
            setError('Incorrect value')
        }else if(counter.startValue===counter.maxValue){
            setError('Incorrect value')
        }
    }
function incrementCurrentValue(currentValue:number, maxValue: number){
            counter.currentValue = currentValue + 1;
            setCounter({...counter})
            limit()

}
function resetCurrentValue(){
        counter.currentValue = counter.startValue;
        setCounter({...counter})
        setError('')
    }

  return (
    <div className="App">
        <Settings  counter={counter}/>
        <Counter error={error} incrementCurrentValue={incrementCurrentValue} resetCurrentValue={resetCurrentValue} counter={counter}/>
    </div>
  );
}

export default App;
