import router from 'intent-router';
import {LOGGED_OUT} from "src/logic/navigation";
import { LoginScene} from "src/scenes";
import Store from 'src/logic/store';

export const LoginSceneRoute = {
    mode:LOGGED_OUT,
    screen:LoginScene,
    props: ()=>({
        submit:async (credentials)=>{
            const res = await Store.profileStore.login(credentials);
            if (res){
                return router.intent("LOGIN")();
            }
        }
    }),
    navigatorStyle:{
        navBarHidden:true
    },
};