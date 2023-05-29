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
    errorHandler: (flag: boolean) => void
    error: boolean
}

function Settings(props: SettingsType) {

    let globalError = false
    if(props.startValue >= props.maxValue){
        props.errorHandler(true);
        globalError = true;
    }

    return (
        <div className={s.Settings}>
            <div className={s.container}>
                <Input typeValue="min"
                       changeInputValue={props.changeInputValue}
                       minValue={props.startValue}
                       title="start value:"
                       errorHandler={props.errorHandler}
                       globalError={globalError}

                />
                <Input typeValue="max"
                       changeInputValue={props.changeInputValue}
                       maxValue={props.maxValue}
                       title="max value:"
                       errorHandler={props.errorHandler}
                       globalError={globalError}
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
