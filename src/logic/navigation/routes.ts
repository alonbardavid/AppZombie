import {router} from './router';
import {HomeScene, LoginScene} from "src/scenes";
import {LoginSceneRoute} from "../profile/routes";
import {LOGGED_IN} from "./modes";
import Store from '../store';

const HomeSceneRoute = {
    mode:LOGGED_IN,
    screen:HomeScene
};


router.route({
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
router.route({
    from:LoginScene,
    when:"LOGIN",
    resolve:async ()=>HomeSceneRoute
});