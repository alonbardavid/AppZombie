import {observable,action} from "mobx";
import {Api} from 'src/api';

export class ProfileStore {
    @observable
    loggedIn= false;

    @observable
    user:any;

    api:Api;
    constructor(api){
        this.api = api;
    }

    login = async (credentials)=>{
        const loggedIn = await this.api.login(credentials);
        const user = await this.api.getCurrentUserProfile();
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
        const loggedIn = await this.api.loginFromStorage();
        const user = await this.api.getCurrentUserProfile();
        this._setCurrentUser(user);
        return true;
    }
}