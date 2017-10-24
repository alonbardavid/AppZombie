import {ProfileStore} from './profile/store';
import {UiStore} from "./ui/store";
import {UsersStore} from "./users/store";
import {PostStore} from "./posts/store";

class RootStore {

    uiStore:UiStore;
    profileStore:ProfileStore;
    usersStore:UsersStore;
    postsStore:PostStore;


    constructor(){
        this.uiStore = new UiStore();
        this.profileStore = new ProfileStore();
        this.usersStore = new UsersStore(this.profileStore);
        this.postsStore = new PostStore(this.uiStore,this.usersStore);
    }
}

const instance = new RootStore();

export default instance;