import React from 'react';
import renderer from 'react-test-renderer';
import {HomeScene} from "./index";
import {getRegularUser} from "src/logic/users/model-factory";

test("home with user",()=>{
    const tree = renderer.create(
        <HomeScene user={getRegularUser()}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});