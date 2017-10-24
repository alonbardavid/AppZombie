import {Api} from "./index";

export const userMe = {
    id:1,
    name:"me Name",
    username:"myUsername",
    email:"myEmail@email.com",
    phone:"+111-222111"

};
export const fakeApi:Api = {
    getPosts:async ()=>([]),
    login: async (cred)=>({token:"sampleToken"}),
    getUser: async (id)=>(userMe),
    loginFromStorage: async ()=>({token:"sampleToken"}),
    getCurrentUserProfile: async ()=>(userMe)
};