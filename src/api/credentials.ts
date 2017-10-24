import {AsyncStorage} from 'react-native';

const USER_STORAGE_KEY = "USER_CREDENTIALS";

type StoredCredentials = {
    username:string,
    password:string
}
let token;
export async function getCredentials():Promise<StoredCredentials>{
    const value = await AsyncStorage.getItem(USER_STORAGE_KEY);
    return value? JSON.parse(value) : null;
}
export function setCredentials(value:StoredCredentials){
    const formatted = value && JSON.stringify(value);
    if (value == null){
        return AsyncStorage.removeItem(USER_STORAGE_KEY);
    }
    return AsyncStorage.setItem(USER_STORAGE_KEY,formatted);
}
export function setCurrentToken(value:string){
    token = value;
}
export function getToken(){
    return token;
}
