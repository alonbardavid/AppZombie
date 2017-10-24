import {registerScreen} from 'intent-router/src/intent-router';
import {HomeScene} from './home';
import {LoginScene} from "./login";

registerScreen(HomeScene);
registerScreen(LoginScene);

export {HomeScene,LoginScene};