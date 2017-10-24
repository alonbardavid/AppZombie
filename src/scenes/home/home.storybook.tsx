import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import {withKnobs,object} from '@storybook/addon-knobs';
import {HomeScene} from './'
import {makeUser} from "src/logic/users/model-factory";
declare var module;
const user = makeUser();
storiesOf('scenes', module).addDecorator(withKnobs)
    .add('home', () => {
        return <HomeScene user={object("user",user)}/>
    });
