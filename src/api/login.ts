import {LoginResponseBody} from './endpoint-schema/login';
import {getCredentials} from './credentials';
import {makeRequest} from "src/api/base";
import {LoginRequestBody} from "src/api/endpoint-schema";

export async function login({username,password}:LoginRequestBody):Promise<LoginResponseBody>{
    const [res,headers] = await makeRequest("/users/1");
    return {
        token:"sample-token-thingy"
    }
}
export async function loginFromStorage(){
    const credentials = await getCredentials();
    return login(credentials);
}
