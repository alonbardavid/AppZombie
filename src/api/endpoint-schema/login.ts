export interface LoginRequestBody {
    username:string;
    password:string;
}

export interface LoginResponseBody {
    id:number;
    username:string;
    name:string;
    email:string;
    phone:string;
}