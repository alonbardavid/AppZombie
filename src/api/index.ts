import * as login from './login';
import * as users from './users';
import * as posts from './posts';


const ApiTemp = {
    ...login,
    ...users,
    ...posts
};
type Api = typeof ApiTemp;


export function createApi():Api {
    return {
        ...login,
        ...users,
        ...posts
    }
}


import * as Schema from './endpoint-schema';
export {Schema,Api};