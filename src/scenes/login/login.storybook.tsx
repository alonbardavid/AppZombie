import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import {LoginScene} from './'
declare var module;

function mockSubmit(...args){
    action("submit")(...args);
    if (args[0] && args[0].username =="error"){
        return Promise.reject(new Error("Username is error"));
    }
    return new Promise(resolve=>setTimeout(resolve,1000));
}
storiesOf('scenes', module).add('login', () => {
    return <LoginScene submit={mockSubmit}/>
});
