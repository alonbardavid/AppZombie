import {Api,Schema} from "../api";

export const userMe = {
    id:1,
    name:"me Name",
    username:"myUsername",
    email:"myEmail@email.com",
    phone:"+111-222111"

};
let loggedIn = true;
export function createApi():Api{
    return {
        getPosts:async ()=>([]),
        login: async (cred)=>({token:"sampleToken"}),
        getUser: async (id)=>(userMe),
        loginFromStorage: async ()=>loggedIn?{token:"sampleToken"}:null,
        getCurrentUserProfile: async ()=>(userMe)
    }
}
export function setLoggedInFromStorage(isLoggedIn){
    loggedIn = isLoggedIn;
}
export {Schema};