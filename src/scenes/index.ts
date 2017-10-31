import router from 'intent-router';
import {HomeScene} from './home';
import {LoginScene} from "./login";
import {PostsScene} from "./posts";

router.registerScreen(HomeScene);
router.registerScreen(LoginScene);
router.registerScreen(PostsScene);
export {HomeScene,LoginScene, PostsScene};