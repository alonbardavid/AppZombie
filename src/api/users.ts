import {makeRequest} from "src/api/base";
import Schema from "src/api/endpoint-schema";

export async function getCurrentUserProfile():Promise<Schema.UserProfile>{
    const [res,headers] = await makeRequest("/users/1");
    return res;
}
