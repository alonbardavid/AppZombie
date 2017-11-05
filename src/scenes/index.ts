import {registerScreen} from 'src/logic/navigation/router';
import {HomeScene} from './home';
import {LoginScene} from "./login";
import {PostsScene} from "./posts";

registerScreen(HomeScene);
registerScreen(LoginScene);
registerScreen(PostsScene);
export {HomeScene,LoginScene, PostsScene};