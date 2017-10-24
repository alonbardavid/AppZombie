import React from 'react';
import {action, observable} from "mobx";


export class UiStore {
    @observable
    navState:any;

    @observable
    errors:string[] = [];

    @action
    addError = (error)=>{
        this.errors.push(error);
    }
}