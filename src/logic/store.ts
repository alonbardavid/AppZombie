import {ProfileStore} from './profile/store';
import {UiStore} from "./ui/store";

class RootStore {

    uiStore:UiStore;
    profileStore:ProfileStore;

    constructor(){
        this.uiStore = new UiStore();
        this.profileStore = new ProfileStore();
    }
}

const instance = new RootStore();

export default instance;