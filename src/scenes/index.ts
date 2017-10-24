import {registerScreen} from 'intent-router/src/intent-router';
import {HomeScene} from './home';
import {LoginScene} from "./login";
import {PostsScene} from "./posts";

registerScreen(HomeScene);
registerScreen(LoginScene);
registerScreen(PostsScene);
export {HomeScene,LoginScene, PostsScene};