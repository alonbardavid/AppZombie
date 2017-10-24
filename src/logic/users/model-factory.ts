import {User} from './model';
import faker from 'faker';
import {consistant} from "src/utils/text-utils";

export function makeUser():User{
    return {
        id:faker.random.number(),
        name:faker.name.findName(),
        email:faker.internet.email(),
        username:faker.internet.userName(),
        phone:faker.phone.phoneNumber()
    }
}
export const getRegularUser = consistant(makeUser);