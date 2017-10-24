import faker from 'faker';


export function consistant(factory){

    return function(...args){
        faker.seed(123);
        const res = factory(...args);
        faker.seed(123);
        return res;
    }
}