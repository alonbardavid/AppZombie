import router from 'intent-router';
import {HomeScene,PostsScene} from "src/scenes";
import Store from '../store';

export const LOGGED_OUT = "LOGGED_OUT";
export const LOGGED_IN = "LOGGED_IN";

router.addMode(LOGGED_OUT,{

});
router.addMode(LOGGED_IN,{
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
    },{
        screen:PostsScene,
        icon: require("./posts.png"),
        containerName:"posts",
        navigatorStyle:{
            navBarHidden:true
        },
        props:()=>({
           posts:Store.postsStore.postList,
           refreshing:Store.postsStore.refreshing,
           refreshPosts:Store.postsStore.refreshPosts
        })
    }]
});