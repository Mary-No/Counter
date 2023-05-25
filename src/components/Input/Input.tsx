import React from 'react';
import s from './Input.module.css';

type InputType = {
    title: string,
    value: number
}
function Input(props:InputType) {
    return (
        <div className={s.Input}>
                    <span className={s.inputTitle}>{props.title}</span>
                    <input type="number" value={props.value}/>
        </div>
    );
}

export default Input;
