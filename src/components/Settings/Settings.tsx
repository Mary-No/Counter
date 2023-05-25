import React, {useState} from 'react';
import s from './Settings.module.css';
import ControlButton from '../ControlButton/ControlButton';
import Input from '../Input/Input';


type SettingsType = {
    currentValue: number
    startValue: number
    maxValue: number
    setLimitValues: (min: number, max: number) => void
    changeInputValue: (type: string, value: number) => void
    errorHandler: (flag:boolean) => void
    error: boolean
}

function Settings(props: SettingsType) {

    return (
        <div className={s.Settings}>
            <div className={s.container}>
                <Input typeValue="min"
                       changeInputValue={props.changeInputValue}
                       value={props.startValue}
                       title="start value:"
                       error={props.error}
                       errorHandler={props.errorHandler}

                />
                <Input typeValue="max"
                       changeInputValue={props.changeInputValue}
                       value={props.maxValue}
                       title="max value:"
                       error={props.error}
                       errorHandler={props.errorHandler}

                />

            </div>
            <ControlButton
                setLimitValues={props.setLimitValues}
                currentValue={props.currentValue}
                maxValue={props.maxValue}
                startValue={props.startValue}
                btnClassName="controlButton counterSet"
                title="set"
                error={props.error}/>

        </div>
    );
}

export default Settings;
