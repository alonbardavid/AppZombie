import {addMode,addRoute} from 'intent-router/src/intent-router';
import {HomeScene, LoginScene} from "src/scenes";
import {LoginSceneRoute} from "../profile/routes";
import {LOGGED_IN} from "./modes";
import Store from '../store';

const HomeSceneRoute = {
    mode:LOGGED_IN,
    screen:HomeScene
};


addRoute({
    when:"INIT",
    resolve:async ()=>{
        try {
            const loggedIn =await Store.profileStore.loginFromStorage();
            if (loggedIn) {
                return HomeSceneRoute;
            } else {
                return LoginSceneRoute;
            }
        } catch (e){
            return LoginSceneRoute;
        }
    }
});
addRoute({
    from:LoginScene,
    when:"LOGIN",
    resolve:async ()=>HomeSceneRoute
});