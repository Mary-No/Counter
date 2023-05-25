import React from 'react';
import  './ControlButton.css';
type ControlButtonType = {
    btnClassName: string
    title: string
    currentValue?: number
    maxValue?: number
    incrementCurrentValue?:(currentValue:number, maxValue: number) => void
    resetCurrentValue?:() => void
}

function ControlButton(props:ControlButtonType) {

    const increment = () => {
        if(props.incrementCurrentValue && props.currentValue !== undefined && props.maxValue !== undefined){
            if(props.maxValue > props.currentValue) {
                props.incrementCurrentValue(props.currentValue, props.maxValue);
            }
        }
    }
    const reset = () => {
        if(props.resetCurrentValue && props.currentValue !== undefined){
                props.resetCurrentValue()
        }
    }
    return (
        <div className={props.btnClassName } onClick={(props.incrementCurrentValue) ? increment: reset}>
            {props.title}
        </div>
    );
}

export default ControlButton;
