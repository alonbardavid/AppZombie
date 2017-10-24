import {RootStore} from 'src/logic/store';
import {fakeApi,userMe} from "src/api/fake-api";

describe("login",()=>{

    test("when logging in, user info should be updated",async ()=>{
        const store = new RootStore(fakeApi);
        await store.profileStore.login({username:"a",password:"a"});
        expect(store.profileStore.loggedIn).toBe(true);
        expect(store.profileStore.user).toEqual(userMe);
    })
});