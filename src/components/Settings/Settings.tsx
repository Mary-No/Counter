import React from 'react';
import s from './Settings.module.css';
import ControlButton from '../ControlButton/ControlButton';
import Input from '../Input/Input';
import {DataCounterType} from '../../App'

type SettingsType = {
    counter: DataCounterType
}

function Settings(props:SettingsType) {
    return (
        <div className={s.Settings}>
            <div className={s.container}>
                <Input value={5} title="max value:"/>
                <Input value={0} title="start value:"/>
            </div>
            <ControlButton btnClassName="controlButton counterSet" title="set"/>

        </div>
    );
}

export default Settings;
