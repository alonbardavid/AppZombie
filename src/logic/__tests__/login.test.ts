import {RootStore} from 'src/logic/store';
import * as Api from 'src/api';
import {router} from 'src/logic/navigation/router';
import 'src/logic/navigation/routes';
import {HomeScene, LoginScene} from "src/scenes";
import {LoginSceneRoute} from "src/logic/profile/routes";

jest.mock("src/api");
jest.mock("src/logic/navigation/router");

const api:any = Api;
describe("login",()=>{
    test("when logging in, user info should be updated",async ()=>{
        const store = new RootStore();
        await store.profileStore.login({username:"a",password:"a"});
        expect(store.profileStore.loggedIn).toBe(true);
        expect(store.profileStore.user).toEqual(api.userMe);
    })
    test("if not logged in, show login screen on app start",async ()=>{
        api.setLoggedInFromStorage(false);
        await router.startApp();
        expect(router._state.screen).toEqual(LoginScene);
    })
    test("if logged in, show home screen on app start",async ()=>{
        api.setLoggedInFromStorage(true);
        await router.startApp();
        expect(router._state.screen).toEqual(HomeScene);
    })
    test("submit in login route should redirect to home screen",async ()=>{
        router.setState(LoginSceneRoute);
        await router._state.props().submit({username:"a",password:"a"});
        expect(router._state.screen).toEqual(HomeScene);
    })
});