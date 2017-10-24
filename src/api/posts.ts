import {makeRequest} from "src/api/base";
import Schema from "src/api/endpoint-schema";


export async function getPosts():Promise<Schema.PostResponse>{
    const [res,headers] = await makeRequest("/posts?_limit=15");
    return res;
}
