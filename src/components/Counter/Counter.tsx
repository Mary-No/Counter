import React from 'react';
import s from './Counter.module.css';
import ControlButton from '../ControlButton/ControlButton';
import {Simulate} from 'react-dom/test-utils';
import error = Simulate.error;

type CounterType = {
    currentValue: number
    startValue: number
    maxValue: number
    incrementCurrentValue?: (currentValue: number) => void
    resetCurrentValue?: () => void
    error: boolean
}

function Counter(props: CounterType) {

    return (
        <div className={s.Counter}>

            {/*className={props.error ? s.error + ' ' + s.counterValue : s.counterValue}*/}
            <div className={props.error ?  s.error + ' ' + s.counterValue : s.counterValue}>

                {props.error ? 'Incorrect value!': props.currentValue}
                {/*{props.error ? props.error : props.currentValue}*/}
            </div>

            <div className={s.controlButtons}>
                <ControlButton currentValue={props.currentValue}
                               maxValue={props.maxValue}
                               startValue={props.startValue}
                               incrementCurrentValue={props.incrementCurrentValue}
                               btnClassName="controlButton counterIncrement"
                               title="inc"
                               error={props.error}></ControlButton>
                <ControlButton currentValue={props.currentValue}
                               maxValue={props.maxValue}
                               startValue={props.startValue}
                               resetCurrentValue={props.resetCurrentValue}
                               btnClassName="controlButton counterReset"
                               title="reset"
                               error={props.error}></ControlButton>
            </div>
        </div>
    );
}

export default Counter;
