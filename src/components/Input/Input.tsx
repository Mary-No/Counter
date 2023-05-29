import React, {ChangeEvent} from 'react';
import s from './Input.module.css';
import {Simulate} from 'react-dom/test-utils';
import error = Simulate.error;

type InputType = {
    title: string
    minValue?: number
    maxValue?: number
    typeValue: string
    changeInputValue: (type: string, value: number) => void
    globalError: boolean
    errorHandler?: (flag: boolean) => void


}
let errorFlag: { [index: string]: any } = {}


function Input(props: InputType) {
    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeInputValue(props.typeValue, +e.currentTarget.value)
        if (+e.currentTarget.value < 0 && props.errorHandler) {
            props.errorHandler(true)
            errorFlag[props.typeValue] = true;

        } else if (+e.currentTarget.value >= 0 && props.errorHandler) {
            props.errorHandler(false)
            errorFlag[props.typeValue] = false;
        }

    }

    if((errorFlag["min"] || errorFlag["max"]) && props.errorHandler){
        props.errorHandler(true)
    }

   const classNameHandler = () => {
        debugger
        if(errorFlag[props.typeValue]){
            return s.inputError
        }else if(props.globalError){
            return s.inputError
        }
   }


    return (
        <div className={s.Input}>
            <span className={s.inputTitle}>{props.title}</span>
            <input className={classNameHandler()}
                   type="number"
                   onChange={changeInputHandler}
                   value={props.maxValue || props.minValue}/>
        </div>
    );
}

export default Input;
