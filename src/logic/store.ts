import {ProfileStore} from './profile/store';
import {UiStore} from "./ui/store";
import {UsersStore} from "./users/store";
import {PostStore} from "./posts/store";
import {Api,createApi} from "src/api";

export class RootStore {

    api:Api;

    uiStore:UiStore;
    profileStore:ProfileStore;
    usersStore:UsersStore;
    postsStore:PostStore;


    constructor(api=createApi()){
        this.api = api;
        this.uiStore = new UiStore();
        this.profileStore = new ProfileStore(this.api);
        this.usersStore = new UsersStore(this.api,this.profileStore);
        this.postsStore = new PostStore(this.api ,this.uiStore,this.usersStore);
    }
}

const instance = new RootStore();

export default instance;