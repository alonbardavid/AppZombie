import React from 'react';
import {CTAButton} from "src/ui";
import renderer from "react-test-renderer";
import {  shallow } from 'enzyme';
import {LoginScene} from './';

test('initial scene',()=>{
    const tree = renderer.create(
        <LoginScene submit={async ()=>{}}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
test('scene with error',()=>{
    const wrapper = shallow(
        <LoginScene submit={async ()=>{throw new Error("custom error")}}/>
    );
    wrapper.setProps({filled:true});
    expect(wrapper).toMatchSnapshot();
});
test('clicking on login button when full should trigger submit',async ()=>{
    const wrapper = shallow(
        <LoginScene submit={async ()=>{throw new Error("custom error")}}/>
    );
    await wrapper.find(CTAButton).props().onPress();
    expect(wrapper).toMatchSnapshot();
});

