import {observable} from "mobx";

export class User {
    @observable
    id:number;
    @observable
    username:string;
    @observable
    name:string;
    @observable
    email:string;
    @observable
    phone:string;
}