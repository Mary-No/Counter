import React, {ChangeEvent} from 'react';
import s from './Input.module.css';

type InputType = {
    title: string
    value: number
    typeValue: string
    changeInputValue: (type: string, value: number) => void
    error: boolean
    errorHandler?: (flag: boolean) => void


}

function Input(props: InputType) {
    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeInputValue(props.typeValue, +e.currentTarget.value)

        if (+e.currentTarget.value < 0 && props.errorHandler) {
            props.errorHandler(true)
            // props.errorFlag = true
        } else if (+e.currentTarget.value >= 0 && props.errorHandler) {
            props.errorHandler(false)
            // props.errorFlag = false
        }

    }

    return (
        <div className={s.Input}>
            <span className={s.inputTitle}>{props.title}</span>
            <input className={(props.error) ? s['inputError' + props.typeValue] : ''} type="number"
                   onChange={changeInputHandler}
                   value={props.value}/>
            {/*<input className={(props.error && props.errorFlag) ? s['inputError' + props.typeValue] : ''} type="number"*/}
            {/*       onChange={changeInputHandler}*/}
            {/*       value={props.value}/>*/}
        </div>
    );
}

export default Input;
