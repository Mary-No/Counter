import React, {useState} from 'react';
import s from './Counter.module.css';
import ControlButton from '../ControlButton/ControlButton';
import {DataCounterType} from '../../App';
import {Simulate} from 'react-dom/test-utils';
import error = Simulate.error;

type CounterType = {
    counter: DataCounterType,
    incrementCurrentValue?:(currentValue:number, maxValue: number)=>void
    resetCurrentValue?:()=>void
    error: string
}
function Counter(props:CounterType) {


    return (
        <div className={s.Counter}>
            <div className={props.error ? s.error + ' ' + s.counterValue: s.counterValue}>{props.error? props.error : props.counter.currentValue}</div>
            <div className={s.controlButtons}>
                <ControlButton currentValue={props.counter.currentValue} maxValue={props.counter.maxValue} incrementCurrentValue={props.incrementCurrentValue} btnClassName="controlButton counterIncrement" title="inc"></ControlButton>
                <ControlButton currentValue={props.counter.currentValue} resetCurrentValue={props.resetCurrentValue} btnClassName="controlButton counterReset" title="reset"></ControlButton>
            </div>
        </div>
    );
}

export default Counter;
