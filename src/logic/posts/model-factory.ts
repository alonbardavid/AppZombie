import {makeUser} from '../users/model-factory';
import {Post} from './model';
import faker from 'faker';

export function makePost():Post{
    return {
        id:faker.random.number(),
        title:faker.hacker.phrase(),
        body:faker.lorem.text(),
        user:makeUser()
    }
}
