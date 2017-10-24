import {addMode} from 'intent-router/src/intent-router';
import {HomeScene} from "src/scenes";
import Store from '../store';

export const LOGGED_OUT = "LOGGED_OUT";
export const LOGGED_IN = "LOGGED_IN";

addMode(LOGGED_OUT,{

});
addMode(LOGGED_IN,{
    tabs:[{
        screen:HomeScene,
        icon: require("./home.png"),
        containerName:"home",
        navigatorStyle:{
            navBarHidden:true
        },
        props:()=>({
            user:Store.profileStore.user
        })
    }]
});