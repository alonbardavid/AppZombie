import {autorun} from "mobx";
import {User} from "./model";
import {ProfileStore} from "src/logic/profile/store";
import * as api from 'src/api';

export class UsersStore {
    users = {} as {[id:number]:Partial<User>};

    private profileStore:ProfileStore;

    constructor(profileStore){
        this.profileStore = profileStore;
        autorun(()=>{
            this.profileStore.user && this.updateUser(this.profileStore.user);
        })
    }

    updateUser = (user:User)=>{
        let original = this.users[user.id];
        if (!original){
            original = this.users[user.id] = {id:user.id} as any;
        }
        original.username = user.username;
        original.name = user.name;
        original.phone = user.phone;
        original.email = user.email;
        return original;
    };

    getUser = (userId:number):User=>{
        let user = this.users[userId];
        if (!user){
            user = this.users[userId] = new User();
            user.id = userId;
            api.getUser(userId).then(this.updateUser);
        }
        return user as User;
    }
}