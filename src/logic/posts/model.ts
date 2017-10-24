import {User} from "src/logic/users/model";
import {observable} from "mobx";

export class Post {
    @observable
    user:User;
    @observable
    id:number;
    @observable
    title:string;
    @observable
    body:string;
}