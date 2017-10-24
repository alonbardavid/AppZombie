import {User} from './model';
import faker from 'faker';

export function makeUser():User{
    return {
        id:faker.random.number(),
        name:faker.name.findName(),
        email:faker.internet.email(),
        username:faker.internet.userName(),
        phone:faker.phone.phoneNumber()
    }
}
