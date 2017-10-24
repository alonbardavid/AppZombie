import {observable,action} from "mobx";
import * as api from 'src/api';

export class ProfileStore {
    @observable
    loggedIn= false;

    @observable
    user:any;

    login = async (credentials)=>{
        const loggedIn = await api.login(credentials);
        const user = await api.getCurrentUserProfile();
        this._setCurrentUser(user);
        return true;
    };
    @action
    private _setCurrentUser(user){
        this.user = user;
        this.loggedIn = true;
    }

    @action
    loginFromStorage = async ()=>{
        const loggedIn = await api.loginFromStorage();
        const user = await api.getCurrentUserProfile();
        this._setCurrentUser(user);
        return true;
    }
}