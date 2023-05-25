import React from 'react';
import './ControlButton.css';

type ControlButtonType = {
    btnClassName: string
    title: string
    currentValue: number
    maxValue: number
    startValue: number
    incrementCurrentValue?: (currentValue: number) => void
    resetCurrentValue?: () => void
    setLimitValues?: (min: number, max: number) => void
    error: boolean
}

function ControlButton(props: ControlButtonType) {


    const increment = () => {
        if (props.incrementCurrentValue && (props.maxValue > props.currentValue)) {
            props.incrementCurrentValue(props.currentValue);
        }
    }
    const reset = () => {
        if (props.resetCurrentValue) {
            props.resetCurrentValue()
        }
    }
    const set = () => {
        if (props.setLimitValues) {
            props.setLimitValues(props.startValue, props.maxValue)
        }
    }
    const disabled = () => {
        if (props.title === 'inc' && props.currentValue === props.maxValue) {
            return true
        } else if (props.title === 'reset' && props.currentValue === props.startValue) {
            return true
        } else if(props.error){
            return true
        }
    }

    const clickHandler = () => {

        switch (props.title) {
            case 'inc': increment()
            break;
            case 'reset': reset()
            break;
            case 'set': set()
            break;
        }
    }
    return (
        <button className={props.btnClassName}
                disabled={disabled()}
                onClick={clickHandler}>
                {props.title}
        </button>
    );
}

export default ControlButton;
