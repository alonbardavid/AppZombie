import config from 'src/config';
import {getToken} from './credentials';

function buildEndpointUrl(path:string,requestConfig:any){
    return `${config.API_URL}${path}`;
}
export function makeRequest(path:string,options:any = {}):Promise<any>{
    const {data,...rest} = options;
    const token = getToken();
    const init = {
        ...rest,
        body: data && JSON.stringify(data),
        headers: {
            ...options.headers,
            'Content-Type': 'application/json',
            "Authorization":token?`Bearer ${token}`:undefined
        }
    };
    console.log(`Requesting endpoint ${path}`,init);
    return fetch(buildEndpointUrl(path,options),init).then(processResponse)
        .catch(async e=>{
            if (e.status === 401){
                //await loginFromStorage();
                //return fetch(buildEndpointUrl(path,options),init).then(processResponse)
            }
            return Promise.reject(e);
        });
}

async function processResponse(response:Response){
    const raw = await response.text();
    if (!response.ok){
        console.log(`received bad response from endpoint ${response.url} with status ${response.status}`
            ,response.statusText,raw);
        try {
            const json = JSON.parse(raw);
            return Promise.reject(new ApiError(json.error || json.message,response.status));
        } catch(e){}
        return Promise.reject(new ApiError(`Request failed - status ${response.status}: ${raw}`,response.status))
    }
    const json = JSON.parse(raw);
    console.log(`received response endpoint ${response.url}`,json);
    return [json,response.headers];
}
export class ApiError extends Error {
    status:number;
    constructor(message,status){
        super(message);
        this.status = status;
    }
}